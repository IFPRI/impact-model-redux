'use strict'
var fs = require('fs')
var _ = require('lodash')

var translation = require('../../app/assets/scripts/utils/translation')
var commodities = require('../../app/assets/data/aggregate-commodity.json')

var baselineScenarios = ['ssp2_gfdl', 'ssp2_hgem', 'ssp2_miroc', 'ssp2_ipsl', 'ssp2_nocc']

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
  // qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
  var figure = `\`\`\`chart
mark: line
title: ${name} Impact Parameters over time
width: 37%
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
  values: qdxagg, qfxagg
\`\`\``

  var figureTwo = `\`\`\`chart
mark: bar
title: Change in ${name} Impact Parameters from 2015 - 2050 (%)
width: 37%
encoding:
  x:
    type: nominal
    field: impactparameter
  y:
    type: quantitative
    field: Val
fixed:
  commodity: ${commodity}
  impactparameter: qdxagg, qfxagg
change:
  field: year
  values: 2015, 2050
  type: percent
\`\`\``

  var figureThree = `\`\`\`chart
mark: stripe
title: ${name} Impact Parameters over time (SSP2_GFDL vs. SSP2_HGEM)
width: 37%
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
  values: qdxagg, qfxagg
series:
  field: _type
  values: ssp2_gfdl, ssp2_hgem, ssp2_ipsl, ssp2_miroc, ssp2_nocc
  shown: ssp2_gfdl, ssp2_hgem
\`\`\``

  var map = `\`\`\`map
title: Change in ${name} IMPACT Parameters from 2015 - 2050 (%)
dropdown:
  field: impactparameter
  values: qdxagg, qfxagg
change:
  field: year
  values: 2015, 2050
  type: percent
fixed:
  commodity: ${commodity}
\`\`\``

  var article = `Summary of IMPACT model outputs for ${name.toLowerCase()}\n\n${figure}\n\n${figureTwo}\n\n${figureThree}\n\n${map}`
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
  if (['f&v-banana', 'cer-barley', 'cer-wheat', 'amt-beef', 'aot-eggs', 'amt-lamb', 'cot-coffee', 'pul-beans', 'f&v-vegetables', 'cot-tea'].includes(commodity)) {
    generateArticle(commodity, group)
  }
})

console.log('Simulated articles saved to ./app/assets/data/articles')
