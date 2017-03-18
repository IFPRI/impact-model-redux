'use strict'
var fs = require('fs')

var baselineScenarios = ['SSP2_GFDL', 'SSP2_HGEM', 'SSP2_MIROC', 'SSP2_IPSL', 'SSP2_NOCC']

function generateArticle (scenario) {
  var date = new Date()
  date = `${date.getMonth() + 1}/${date.getDate()}/${1900 + date.getYear()}`
  var articleType = 'scenario'
  var tags = [scenario, 'baseline']

  var name = scenario
  var fileName = name.replace(/ /g, '-').toLowerCase()
  var title = `${name} Summary`

  var article = `Summary of IMPACT model outputs for ${name} `

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

  fs.writeFileSync(`./app/assets/data/articles/${fileName}.md`, output)
}

baselineScenarios.forEach(scenario => generateArticle(scenario))

console.log('Simulated articles saved to ./app/assets/data/articles')
