'use strict'
import fetch from 'isomorphic-fetch'
import sqltoes from 'sqltoes'
import _ from 'lodash'

import config from '../config'

const queryDatabase = (data) => {
  const groups = String(data.encoding.x.field).split(',').map(a => a.trim())
  let group
  if (groups.length === 1) {
    group = groups[0]
  } else {
    group = null || groups[0]
  }

  // construct a where clause for our sql statement
  const where = _.flatten(_.map(data.fixed, (val, param) => {
    const vals = String(val).split(',').map(a => a.trim())
    return vals.length === 1 ? `${param} = ${val}` : `${param} in ${vals.join(',')}`
  }))
  Object.keys(data).forEach(dataKey => {
    if (dataKey.match(/dropdown/)) {
      where.push(data[dataKey].field + ' = ' + data[dataKey].values[0])
    }
  })

  // group by for sql statement, add series if necessary
  const groupBy = [group]

  // switch for getting change in var between two values
  const change = data.change
  if (change) {
    groupBy.push(change.field)
    where.push(`${change.field} in ${change.values}`)
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
      values: _.flattenDeep(_.get(resp.aggregations, wherePath)[`group_by_${group}`].buckets.map((obj) => {
        return parseDataObject(obj, group, val, {}, change)
      }))
    }
    return Object.assign(queryData, data.fixed, {groupBy: groupBy[0]})
  })
}

const parseDataObject = (obj, group, val, otherKeys, change) => {
  var nextGroup = Object.keys(obj).find(a => a.match('group_by'))
  // we may have other groupings to parse through
  if (nextGroup) {
    // special parsing for change by variables
    if (nextGroup === `group_by_${change.field}` && change) {
      if (obj[nextGroup].buckets[1]) {
        return Object.assign({}, {
          // assumes later value in bucket 1 and early value in bucket 0
          // divide by earlier value if we want a percentage
          [val]: (obj[nextGroup].buckets[1][`sum_${val}`].value - obj[nextGroup].buckets[0][`sum_${val}`].value) /
            (_.includes(['percentage', 'percent', '%', 'p'], change.type) ? obj[nextGroup].buckets[0][`sum_${val}`].value : 1),
          [group]: obj.key
        }, otherKeys)
      } else {
        return {}
      }
    } else {
    // normal procedure
      return obj[nextGroup].buckets.map(a => {
        return parseDataObject(a, nextGroup.replace('group_by_', ''), val, Object.assign({}, otherKeys, {[group]: obj.key}), change)
      })
    }
  } else {
    // we're at the lowest level, make our object
    return Object.assign({}, {
      [group]: obj.key,
      [val]: obj[`sum_${val}`].value
    }, otherKeys)
  }
}

export default queryDatabase
