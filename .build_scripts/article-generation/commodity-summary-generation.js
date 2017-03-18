'use strict'
var fs = require('fs')
var _ = require('lodash')

var translation = require('../../app/assets/scripts/utils/translation')

var potentialCommodities = {
  'Animal Products': ['beef', 'eggs', 'lamb', 'milk', 'pork', 'poul'],
  'Cereals': ['maiz', 'barl', 'mill', 'ocer', 'rice', 'sorg', 'whea'],
  'Fruits Vegetables': ['bana', 'plnt', 'subf', 'temf', 'vege'],
  'Oils Seeds': ['grnd', 'palm', 'pkrl', 'rpsd', 'soyb', 'snfl', 'tols'],
  'Food Oils': ['gdol', 'plol', 'pkol', 'rpol', 'sbol', 'sfol', 'tool'],
  'Oil Meals': ['gdml', 'pkml', 'rpml', 'sbml', 'sfml', 'toml'],
  'Other': ['cafe', 'coco', 'cott', 'fodr', 'othr', 'pstr', 'grss', 'teas'],
  'Pulses': ['bean', 'chkp', 'cowp', 'lent', 'opul', 'pigp'],
  'Roots Tubers': ['cass', 'orat', 'pota', 'swpt', 'yams'],
  'Sugar': ['sugb', 'sugc', 'sugr']}

var baselineScenarios = ['SSP2_GFDL', 'SSP2_HGEM', 'SSP2_MIROC', 'SSP2_IPSL', 'SSP2_NOCC']

function generateArticle (commodity) {
  var date = new Date()
  date = `${date.getMonth() + 1}/${date.getDate()}/${1900 + date.getYear()}`
  var articleType = 'brief'
  var briefType = 'commodity-summary'
  var scenarios = baselineScenarios

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

  var article = `# ${name}\n\n${figure}\n\n${map}`

  var scenarioString = scenarios.map(s => `  - ${s}`).join('\n')

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
---
${article}`

  fs.writeFileSync(`./app/assets/data/articles/${fileName}.md`, output)
}

_.flatten(_.map(potentialCommodities, c => c)).forEach(commodity => {
  generateArticle(commodity)
})

console.log('Simulated articles saved to ./app/assets/data/articles')
