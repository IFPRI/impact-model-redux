'use strict'
import fetch from 'isomorphic-fetch'
import sqltoes from 'sqltoes'
import _ from 'lodash'

import config from '../config'

export const parseChart = (data, whereClause, callback) => {
  // // grab the important field names
  const groups = String(data.encoding.x.field).split(',').map(a => a.trim())
  let group
  if (groups.length === 1) {
    group = groups[0]
  } else {
    group = null || groups[0]
  }

  let val = data.encoding.y.field
  // construct a where clause for our sql statement
  const where = _.flatten(_.map(data.fixed, (val, param) => {
    const vals = String(val).split(',').map(a => a.trim())
    return vals.length === 1 ? `${param} = ${val}` : `${param} in ${vals.join(',')}`
  }))
  where.push(data.dropdown.field + ' = ' + whereClause)

  // group by for sql statement, add series if necessary
  const groupBy = [group]

  // switch for getting change in var from 2015 - 2050
  const change = data.change
  if (change) {
    groupBy.push('year')
    where.push('year in 2015,2050')
  }

  // request the data and parse the response for our graph format
  const postData = JSON.stringify(sqltoes({select: [`sum(${val})`], where: where, groupBy: groupBy}))
  return fetch(config.dbUrl, {
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
    callback(queryData)
  })
}

const parseDataObject = (obj, group, val, otherKeys, change) => {
  var nextGroup = Object.keys(obj).find(a => a.match('group_by'))
  // we may have other groupings to parse through
  if (nextGroup) {
    // special parsing for change by year
    if (nextGroup === 'group_by_year' && change) {
      return Object.assign({}, {
        // assumes later value in bucket 1 and early value in bucket 0
        // divide by earlier value if we want a percentage
        [val]: (obj[nextGroup].buckets[1][`sum_${val}`].value - obj[nextGroup].buckets[0][`sum_${val}`].value) /
          (_.includes(['percentage', 'percent', '%', 'p'], change) ? obj[nextGroup].buckets[0][`sum_${val}`].value : 1),
        [group]: obj.key
      }, otherKeys)
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
// }
