'use strict'
var fs = require('fs')
var _ = require('lodash')

var commodities = require('../../app/assets/data/aggregate-commodity.json')
var translation = require('../../app/assets/scripts/utils/translation')

var baselineScenarios = ['ssp2_gfdl', 'ssp2_hgem', 'ssp2_miroc', 'ssp2_ipsl', 'ssp2_nocc']

function generateArticle (scenario) {
  var date = new Date()
  date = `${date.getMonth() + 1}/${date.getDate()}/${1900 + date.getYear()}`
  var tags = [scenario, 'baseline']

  var name = translation.translate(scenario)
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
  impactparameter: qdxagg, qfxagg
  _type: ${scenario}
dropdown:
  field: agg_commodity
  values: ${_.uniq(_.values(commodities)).join(',')}
change:
  field: year
  values: 2015, 2050
  type: percent
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
  _type: ${scenario}
dropdown:
  field: impactparameter
  values: qdxagg, qfxagg
change:
  field: year
  values: 2015, 2050
  type: percent
\`\`\``

  var chartComparison = baselineScenarios[(baselineScenarios.indexOf(scenario) + 1) % baselineScenarios.length]
  var figureThree = `\`\`\`chart
mark: grouped-bar
title: Change in ${name} Impact Parameters per Commodity Group (%) from 2015 - 2050 (${translation.translate(scenario)} vs. ${translation.translate(chartComparison)})
width: 70%
encoding:
  x:
    type: nominal
    field: impactparameter
  y:
    type: quantitative
    field: Val
fixed:
  impactparameter: qdxagg, qfxagg
dropdown:
  field: agg_commodity
  values: ${_.uniq(_.values(commodities)).join(',')}
series:
  field: _type
  values: ${scenario}, ${chartComparison}
change:
  field: year
  values: 2015, 2050
  type: percent
\`\`\``

  var map = `\`\`\`map
title: Change in ${name} IMPACT Parameters from 2015 - 2050 (%)
fixed:
  _type: ${scenario}
dropdownCommodityGroup:
  field: agg_commodity
  values: ${_.uniq(_.values(commodities)).join(',')}
dropdownParameter:
  field: impactparameter
  values: qdxagg, qfxagg
change:
  field: year
  values: 2015, 2050
  type: percent
\`\`\``

  var article = `Summary of IMPACT model outputs for ${name}\n\n${figure}\n\n${figureTwo}\n\n${figureThree}\n\n${map}`

  var scenarioString = [scenario].map(s => ` - ${s}`).join('\n')
  var tagString = tags.map(t => ` - ${t}`).join('\n')

  var output = `---
title: ${title}
date: ${date}
type: scenario
briefType: scenario
project: 'baseline'
scenarios:
${scenarioString}
tags:
${tagString}
---
${article}`
  console.log(`writing ${scenario}.md`)
  fs.writeFileSync(`./app/assets/data/articles/${scenario}.md`, output)
}

baselineScenarios.forEach(scenario => generateArticle(scenario))

console.log('Simulated articles saved to ./app/assets/data/articles')
