'use strict'
var fs = require('fs')
var _ = require('lodash')

var translation = require('../../app/assets/scripts/utils/translation')

var potentialCommodities = {
  'animal_products': ['beef', 'eggs', 'lamb', 'milk', 'pork', 'poul'],
  'cereals': ['maiz', 'barl', 'mill', 'ocer', 'rice', 'sorg', 'whea'],
  'fruits_vegetables': ['bana', 'plnt', 'subf', 'temf', 'vege'],
  'oils_seeds': ['grnd', 'palm', 'pkrl', 'rpsd', 'soyb', 'snfl', 'tols'],
  'food_oils': ['gdol', 'plol', 'pkol', 'rpol', 'sbol', 'sfol', 'tool'],
  'oil_meals': ['gdml', 'pkml', 'rpml', 'sbml', 'sfml', 'toml'],
  'other': ['cafe', 'coco', 'cott', 'fodr', 'othr', 'pstr', 'grss', 'teas'],
  'pulses': ['bean', 'chkp', 'cowp', 'lent', 'opul', 'pigp'],
  'roots_tubers': ['cass', 'orat', 'pota', 'swpt', 'yams'],
  'sugar': ['sugb', 'sugc', 'sugr']
}

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

  var scenarioString = scenarios.map(s => `  - ${s}`).join('\n')
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

_.flatMap(potentialCommodities, (commodityList, group) => commodityList.map(commodity => ({commodity, group}))).forEach(obj => {
  generateArticle(obj.commodity, obj.group)
})

console.log('Simulated articles saved to ./app/assets/data/articles')
