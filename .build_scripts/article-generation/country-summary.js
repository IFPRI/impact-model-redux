'use strict'
var fs = require('fs')
var _ = require('lodash')
var queue = require('queue-async')
var sqltoes = require('sqltoes')
var fetch = require('isomorphic-fetch')

var translation = require('../../app/assets/scripts/utils/translation')
var regions = require('../../app/assets/data/aggregate-region.json')
var commodities = require('../../app/assets/data/aggregate-commodity.json')

var baselineScenarios = ['SSP2_GFDL', 'SSP2_HGEM', 'SSP2_MIROC', 'SSP2_IPSL', 'SSP2_NOCC']
var dbUrl = 'https://82e66fb22a73abdaa81040f2abdc298f-us-east-1.foundcluster.com:9243/ifpri/ssp2_gfdl/_search?search_type=count'
var q = queue(2)

function generateArticle (region, subcontinent, continent, callback) {
  console.log(`Creating country page for: ${translation.translate(region)}`)
  var date = new Date()
  date = `${date.getMonth() + 1}/${date.getDate()}/${1900 + date.getYear()}`
  var articleType = 'brief'
  var briefType = 'country-summary'
  var scenarios = baselineScenarios
  var tags = [region, subcontinent, continent, 'baseline']

  var name = translation.translate(region)
  var fileName = name.replace(/ /g, '-').toLowerCase()
  var title = `${name} Summary`

  function outputChart (param) {
    return `\`\`\`chart
mark: bar
title: ${name} - ${translation.translate(param)}
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: ${region}
  impactparameter: ${param}
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: ${_.uniq(_.values(commodities)).join(',')}
\`\`\``
  }

  function foodSecurity (param) {
    return `\`\`\`chart
mark: bar
title: ${name} - ${translation.translate(param)}
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: ${region}
  impactparameter: ${param}
  year: 2015,2030,2050
\`\`\``
  }
  // qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
  var outputFigures = ['qdxagg', 'qsupxagg', 'qnxagg']
    .map(param => `${outputChart(param)}\n\n`).join('')

  var foodSecurityFigures = ['populationatriskxagg', 'foodavailxagg', 'totalmalnourishedxagg']
    .map(param => `${foodSecurity(param)}\n\n`).join('')

  const neededDataWheres = [
    [`agg_subcontinent = ${subcontinent}`, 'year = 2015', 'impactparameter = popxagg'],
    [`agg_subcontinent = ${subcontinent}`, 'year = 2030', 'impactparameter = popxagg'],
    [`agg_subcontinent = ${subcontinent}`, 'year = 2050', 'impactparameter = popxagg'],
    [`agg_subcontinent = ${subcontinent}`, 'year = 2015', 'impactparameter = gdpxagg'],
    [`agg_subcontinent = ${subcontinent}`, 'year = 2030', 'impactparameter = gdpxagg'],
    [`agg_subcontinent = ${subcontinent}`, 'year = 2050', 'impactparameter = gdpxagg'],
    [`region = ${region}`, 'year = 2015', 'impactparameter = popxagg'],
    [`region = ${region}`, 'year = 2030', 'impactparameter = popxagg'],
    [`region = ${region}`, 'year = 2050', 'impactparameter = popxagg'],
    [`region = ${region}`, 'year = 2015', 'impactparameter = gdpxagg'],
    [`region = ${region}`, 'year = 2030', 'impactparameter = gdpxagg'],
    [`region = ${region}`, 'year = 2050', 'impactparameter = gdpxagg']
  ]

  var articleQueue = queue(12)
  neededDataWheres.forEach((where, index) => {
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
    articleQueue.defer(function (cb) {
      const postData = JSON.stringify(sqltoes({select: [`sum(Val)`], where, groupBy: []}))
      fetch(dbUrl, {
        method: 'post',
        body: postData
      })
      .then((resp) => resp.json())
      .then((resp) => cb(null, _.get(resp.aggregations, wherePath).sum_Val.value.toFixed(2)))
      .catch(err => callback(null, err))
    })
  })

  articleQueue.awaitAll(function (err, results) {
    if (err) console.log(err)
    var table = `|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| ${translation.translate(subcontinent)} | Population (million) | ${results[0]} | ${results[1]} | ${results[2]} |
|  | GDP (billion $US) | ${results[3]} | ${results[4]} | ${results[5]} |
|  | Per capita GDP ($US) | ${(1000 * Number(results[3]) / Number(results[0])).toFixed(2)} | ${(1000 * Number(results[4]) / Number(results[1])).toFixed(2)} | ${(1000 * Number(results[5]) / Number(results[2])).toFixed(2)} |
| ${translation.translate(region)} | Population (million) | ${results[6]} | ${results[7]} | ${results[8]} |
|  | GDP (billion $US) | ${results[9]} | ${results[10]} | ${results[11]} |
|  | Per capita GDP ($US) | ${(1000 * Number(results[9]) / Number(results[6])).toFixed(2)}| ${(1000 * Number(results[10]) / Number(results[7])).toFixed(2)}| ${(1000 * Number(results[11]) / Number(results[8])).toFixed(2)}|`

    var article = `Summary of IMPACT model outputs for ${name}\n\n${outputFigures}${foodSecurityFigures}${table}`

    var scenarioString = scenarios.map(s => ` - ${s}`).join('\n')
    var tagString = tags.map(t => ` - ${t}`).join('\n')

    var output = `---
title: ${title}
date: ${date}
type: ${articleType}
briefType: ${briefType}
project: 'baseline'
locations:
  - ${region}
  - ${subcontinent}
  - ${continent}
scenarios:
${scenarioString}
tags:
${tagString}
---
${article}`

    fs.writeFileSync(`./app/assets/data/articles/${fileName}.md`, output)
    callback(null, fileName)
  })
}

_.forEach(regions, r => {
  q.defer(cb => {
    generateArticle(r.region, r.subcontinent, r.continent, cb)
  })
})

q.awaitAll(function (err, results) {
  if (err) console.error('err: ' + err)
  console.log('Simulated articles saved to ./app/assets/data/articles')
})
