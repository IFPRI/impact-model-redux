'use strict'
var fs = require('fs')
var _ = require('lodash')

var commodities = require('../../app/assets/data/aggregate-commodity.json')

var baselineScenarios = ['SSP2_GFDL', 'SSP2_HGEM', 'SSP2_MIROC', 'SSP2_IPSL', 'SSP2_NOCC']

function generateArticle (scenario) {
  var date = new Date()
  date = `${date.getMonth() + 1}/${date.getDate()}/${1900 + date.getYear()}`
  var articleType = 'scenario'
  var tags = [scenario, 'baseline']

  var name = scenario
  var fileName = name.replace(/ /g, '-').toLowerCase()
  var title = `${name} Summary`

  var figure = `\`\`\`chart
mark: bar
title: Change in ${name} Impact Parameters per Commodity Group from 2015 - 2050 (%)
width: 70%
encoding:
  x:
    type: nominal
    field: impactparameter
  y:
    type: quantitative
    field: Val
fixed:
  impactparameter: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
dropdown:
  field: agg_commodity
  values: ${_.uniq(_.values(commodities)).join(',')}
change: true
\`\`\``

  var figureTwo = `\`\`\`chart
mark: bar
title: Change in ${name} Impact Parameters from 2015 - 2050 (%)
width: 70%
encoding:
  x:
    type: nominal
    field: agg_commodity
  y:
    type: quantitative
    field: Val
fixed:
  agg_commodity: ${_.uniq(_.values(commodities)).join(',')}
dropdown:
  field: impactparameter
  values: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
change: true
\`\`\``

  var chartComparison = baselineScenarios[Math.floor(Math.random() * (baselineScenarios.length - 1))]
  var figureThree = `\`\`\`chart
mark: grouped-bar
title: Change in ${name} Impact Parameters per Commodity Group (%) from 2015 - 2050 (${scenario} vs. ${chartComparison})
width: 70%
encoding:
  x:
    type: nominal
    field: impactparameter
  y:
    type: quantitative
    field: Val
scenarios: ${scenario}, ${chartComparison}
fixed:
  impactparameter: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
dropdown:
  field: agg_commodity
  values: ${_.uniq(_.values(commodities)).join(',')}
change: true
\`\`\``

  var map = `\`\`\`map
title: Change in ${name} IMPACT Parameters from 2015 - 2050 (%)
dropdownCommodityGroup:
  field: agg_commodity
  values: ${_.uniq(_.values(commodities)).join(',')}
dropdownParameter:
  field: impactparameter
  values: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
change: percentage
\`\`\``

  var article = `Summary of IMPACT model outputs for ${name}\n\n${figure}\n\n${figureTwo}\n\n${figureThree}\n\n${map}`

  var scenarioString = [scenario].map(s => ` - ${s}`).join('\n')
  var tagString = tags.map(t => ` - ${t}`).join('\n')

  var output = `---
title: ${title}
date: ${date}
type: ${articleType}
project: 'baseline'
scenarios:
${scenarioString}
tags:
${tagString}
---
${article}`
  console.log(`writing ${fileName}.md`)
  fs.writeFileSync(`./app/assets/data/articles/${fileName}.md`, output)
}

baselineScenarios.forEach(scenario => generateArticle(scenario))

console.log('Simulated articles saved to ./app/assets/data/articles')
