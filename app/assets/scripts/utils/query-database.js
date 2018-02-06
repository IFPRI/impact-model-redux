'use strict'
import fetch from 'isomorphic-fetch'
import sqltoes from 'sqltoes'
import _ from 'lodash'

import config from '../config'

const queryDatabase = (data) => {
  const exclusions = []
  let rateVar = false
  const groups = String(data.encoding.x.field).split(',').map(a => a.trim())
  let group
  if (groups.length === 1) {
    group = groups[0]
  } else {
    group = null || groups[0]
  }

  // construct a where clause for our sql statement
  // we treat 'data.fixed' and dropdown options the same
  if (!data.fixed) data.fixed = {}
  Object.keys(data).forEach(dataKey => {
    if (dataKey.match(/dropdown/)) {
      data.fixed[data[dataKey].field] = data[dataKey].values[0]
    }
  })

  const where = _.flatten(_.map(data.fixed, (val, param) => {
    let vals = String(val).split(',').map(a => a.trim())

    if (param === 'impactparameter') {
      // if we have certain filters, make sure we have the rate components
      // track these to exclude them from the final output
      if (vals.includes('tyldxagg')) {
        rateVar = true
        ;['qsupxagg', 'tareaxagg'].forEach(par => {
          if (!vals.includes(par)) {
            vals.push(par)
            exclusions.push(par)
          }
        })
      }
    }

    return vals.length === 1 ? `${param} = ${val}` : `${param} in ${vals.join(',')}`
  }))

  // group by for sql statement, add series if necessary
  const groupBy = [group]

  // add series grouping
  const series = data.series
  if (data.series) {
    groupBy.push(series.field)
    where.push(`${series.field} in ${series.values}`)
  }

  // switch for getting change in var between two values
  const change = data.change
  if (change && change.field && change.values) {
    groupBy.push(change.field)
    where.push(`${change.field} in ${change.values}`)
  }

  // if we've ever "switched on" the rate variable, group by that
  if (rateVar && !groupBy.includes('impactparameter')) {
    groupBy.push('impactparameter')
  }

  let val = data.encoding.y.field
  // request the data and parse the response for our graph format
  const postData = JSON.stringify(sqltoes({select: [`sum(${val})`], where: where, groupBy: groupBy}))
  return fetch(`${config.dbUrl}/_search`, {
    method: 'post',
    body: postData})
  .then((resp) => resp.json())
  .then((resp) => {
    // find out how to parse our response
    const wherePath = where.map(a => {
      let b, c
      if (a.match(' = ')) {
        [b, c] = a.split(' = ')
        return `where_${b}_${c}`
      } else {
        [b, c] = a.split(' in ')
        return `where_${b}_multiple`
      }
    })

    const queryData = {
      values: _.flattenDeep(_.get(resp.aggregations, wherePath)[`group_by_${group}`].buckets.map((obj, i, b) => {
        return parseDataObject(obj, group, val, {}, change, b, exclusions)
      })).filter(Boolean).filter(_.negate(_.isEmpty))
    }

    return Object.assign(
      queryData,
      data.fixed,
      { groupBy: groupBy[0] },
      { secondaryGrouping: series ? groupBy[1] : null }
    )
  })
}

const parseDataObject = (obj, group, val, otherKeys, change, fullBucket, exclusions) => {
  if (exclusions.includes(obj.key)) return false
  var nextGroup = Object.keys(obj).find(a => a.match('group_by'))
  // we may have other groupings to parse through
  if (nextGroup) {
    // special parsing for change by variables
    if (change && nextGroup === `group_by_${change.field}`) {
      if (obj[nextGroup].buckets[1]) {
        // if it's a rate, we'll have one extra grouping to handle
        if (obj[nextGroup].buckets[1].hasOwnProperty('group_by_impactparameter')) {
          // loop over all non-exclusion parameters in this bucket
          const innerBucketOne = obj[nextGroup].buckets[1].group_by_impactparameter.buckets
          const innerBucketZero = obj[nextGroup].buckets[0].group_by_impactparameter.buckets
          const params = innerBucketOne.filter(p => !exclusions.includes(p.key))
          return params.reduce((a, b) => {
            switch (b.key) {
              case 'tyldxagg':
                const productionOne = innerBucketOne.find(o => o.key === 'qsupxagg')
                const areaOne = innerBucketOne.find(o => o.key === 'tareaxagg')
                const yieldOne = productionOne[`sum_${val}`].value / areaOne[`sum_${val}`].value
                const productionZero = innerBucketZero.find(o => o.key === 'qsupxagg')
                const areaZero = innerBucketZero.find(o => o.key === 'tareaxagg')
                const yieldZero = productionZero[`sum_${val}`].value / areaZero[`sum_${val}`].value
                return Object.assign({}, {
                  [group]: obj.key,
                  [val]: yieldOne - yieldZero /
                    (_.includes(['percentage', 'percent', '%', 'p'], change.type) ? yieldZero : 1)
                }, a)
              default:
                return a
            }
          }, {})
        } else {
          return Object.assign({}, {
            // assumes later value in bucket 1 and early value in bucket 0
            // divide by earlier value if we want a percentage
            [val]: (obj[nextGroup].buckets[1][`sum_${val}`].value - obj[nextGroup].buckets[0][`sum_${val}`].value) /
              (_.includes(['percentage', 'percent', '%', 'p'], change.type) ? obj[nextGroup].buckets[0][`sum_${val}`].value : 1),
            [group]: obj.key
          }, otherKeys)
        }
      } else {
        return {}
      }
    } else {
    // normal procedure
      return obj[nextGroup].buckets.map((a, _, b) => {
        return parseDataObject(a, nextGroup.replace('group_by_', ''), val, Object.assign({}, otherKeys, {[group]: obj.key}), change, b, exclusions)
      })
    }
  } else {
    // we're at the lowest level, make our object
    // if it's a rate, calculate it
    switch (obj.key) {
      case 'tyldxagg':
        const production = fullBucket.find(o => o.key === 'qsupxagg')
        const area = fullBucket.find(o => o.key === 'tareaxagg')
        return Object.assign({}, {
          [group]: obj.key,
          [val]: production[`sum_${val}`].value / area[`sum_${val}`].value
        }, otherKeys)
      default:
        return Object.assign({}, {
          [group]: obj.key,
          [val]: obj[`sum_${val}`].value
        }, otherKeys)
    }
  }
}

export default queryDatabase
