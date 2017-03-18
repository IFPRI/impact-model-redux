'use strict'
var fs = require('fs')
var _ = require('lodash')

var translation = require('../../app/assets/scripts/utils/translation')
var commodities = require('../../app/assets/data/aggregate-commodity.json')

var baselineScenarios = ['SSP2_GFDL', 'SSP2_HGEM', 'SSP2_MIROC', 'SSP2_IPSL', 'SSP2_NOCC']

function generateArticle (commodity, group) {
  var date = new Date()
  date = `${date.getMonth() + 1}/${date.getDate()}/${1900 + date.getYear()}`
  var articleType = 'brief'
  var briefType = 'commodity-summary'
  var scenarios = baselineScenarios
  var tags = [commodity, group, 'baseline']

  var name = translation.translate(commodity)
  var fileName = name.replace(/ /g, '-').toLowerCase()
  var title = `${name} Summary`
  var figure = `\`\`\`chart
mark: line
title: ${name} Impact Parameters over time
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  commodity: ${commodity}
dropdown:
  field: impactparameter
  values: qdxagg, qnxagg
\`\`\``

  var map = `\`\`\`map
title: Change in ${name} Demand from 2015 - 2050 (%)
aggregation: country
fixed:
  impactparameter: qdxagg
  commodity: ${commodity}
change: percentage
\`\`\``

  var article = `Summary of IMPACT model outputs for ${name.toLowerCase()}\n\n${figure}\n\n${map}`

  var scenarioString = scenarios.map(s => ` - ${s}`).join('\n')
  var tagString = tags.map(t => ` - ${t}`).join('\n')

  var output = `---
title: ${title}
date: ${date}
type: ${articleType}
briefType: ${briefType}
project: 'baseline'
commodities:
  - ${commodity}
scenarios:
${scenarioString}
tags:
${tagString}
---
${article}`

  fs.writeFileSync(`./app/assets/data/articles/${fileName}.md`, output)
}

_.forEach(commodities, (group, commodity) => {
  generateArticle(commodity, group)
})

console.log('Simulated articles saved to ./app/assets/data/articles')
