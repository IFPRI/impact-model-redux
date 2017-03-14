var _ = require('lodash')
var Elastic = require('./elastic')

export const MapChoro = Elastic.extend({
  parse: (response, options) => {
    const topKey = _.keys(response.aggregations)[0]
    const secondKey = _.keys(response.aggregations[topKey])[1]
    const regionalAgg = _.keys(response.aggregations[topKey][secondKey]['where_year_multiple'])[1]
    return response.aggregations[topKey][secondKey]['where_year_multiple'][regionalAgg]['buckets']
  }

})

export default MapChoro
