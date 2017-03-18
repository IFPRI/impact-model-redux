'use strict'
var fs = require('fs')
var _ = require('lodash')

var translation = require('../../app/assets/scripts/utils/translation')
var regions = require('../../app/assets/data/aggregate-region.json')

var baselineScenarios = ['SSP2_GFDL', 'SSP2_HGEM', 'SSP2_MIROC', 'SSP2_IPSL', 'SSP2_NOCC']

function generateArticle (region, subcontinent, continent) {
  var date = new Date()
  date = `${date.getMonth() + 1}/${date.getDate()}/${1900 + date.getYear()}`
  var articleType = 'brief'
  var briefType = 'country-summary'
  var scenarios = baselineScenarios
  var tags = [region, subcontinent, continent, 'baseline']

  var name = translation.translate(region)
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
  region: ${region}
dropdown:
  field: impactparameter
  values: qdxagg, qnxagg
\`\`\``

  var article = `Summary of IMPACT model outputs for ${name}\n\n${figure}`

  var scenarioString = scenarios.map(s => `  - ${s}`).join('\n')
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
}

_.forEach(regions, r => generateArticle(r.region, r.subcontinent, r.continent))

console.log('Simulated articles saved to ./app/assets/data/articles')
