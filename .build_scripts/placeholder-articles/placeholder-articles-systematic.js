/*******************
** Temporary script to generate placeholder articles in development
************/

var faker = require('faker')
var glob = require('glob')
var fs = require('fs')
var _ = require('lodash')

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

var potentialCharts = [
  'bar', 'horizontalBar', 'pie', 'doughnut', 'line', 'polarArea'
]

var translations = require('./translations.json')

var untranslate = (str) => _.invert(translations)[str]

var commaSeparate = (array) => array.join(', ')

function toTitleCase (str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function pickRandomProjectName (articleType) {
  if (articleType === 'project') return 'N/A'
  var potentialNames = [
    'Apollo', 'Bride of Buster', 'Deepmind', 'Galactica', 'Zulu'
  ]
  return potentialNames[getRandomInt(0, 4)]
}

function pickRandomAuthor () {
  var potentialAuthors = [
    'Jennifer Grimes', 'Jordan Hintz', 'Viola Kshlerin', 'Jasper Runolfsdottir', 'Shany Monahan',
    'Vincent Block', 'Nicole Schmeler', 'Rolando Metz', 'Zelma Mills', 'Berta Schiller', 'Sydni Carter',
    'Harvey Stracke', 'Dayton Jacobson', 'Modesto Wilderman', 'Maximillian Fahey']
  return potentialAuthors[getRandomInt(0, 14)]
}

function pickRandomType () {
  var potentialTypes = [
    'scenario', 'scenario', 'scenario',
    'brief', 'brief', 'brief', 'brief', 'brief', 'brief'
  ]
  return potentialTypes[getRandomInt(0, 8)]
}

function pickRandomScenarios () {
  var potentialScenarios = [
    'SSP2_GFDL_CBIOL1_CASS', 'SSP2_GFDL_CBIOL2_CASS', 'SSP2_GFDL_CBIOL3_CASS', 'SSP2_GFDL_D_H_POT',
    'SSP2_GFDL_D_H_WHEA', 'SSP2_GFDL_D_H_Y_GN', 'SSP2_GFDL_DTOL_GN', 'SSP2_GFDL_DTOL_MAIZ',
    'SSP2_GFDL_DTOL_POT', 'SSP2_GFDL_DTOL_RICE', 'SSP2_GFDL_DTOL_WHEA', 'SSP2_GFDL_HTOL_GN',
    'SSP2_GFDL_HTOL_MAIZ', 'SSP2_GFDL_HTOL_POT', 'SSP2_GFDL_HTOL_WHEA', 'SSP2_GFDL_MealyBug_CASS',
    'SSP2_GFDL_DTOL_SOR', 'SSP2_NOCC_CBIOL1_CASS', 'SSP2_NOCC_CBIOL2_CASS', 'SSP2_NOCC_CBIOL3_CASS',
    'SSP2_NOCC_D_H_POT', 'SSP2_NOCC_D_H_WHEA', 'SSP2_NOCC_D_H_Y_GN', 'SSP2_NOCC_DTOL_GN', 'SSP2_NOCC_DTOL_MAIZ',
    'SSP2_NOCC_DTOL_POT', 'SSP2_NOCC_DTOL_RICE', 'SSP2_NOCC_DTOL_WHEA', 'SSP2_NOCC_HTOL_GN', 'SSP2_NOCC_HTOL_MAIZ',
    'SSP2_NOCC_HTOL_POT', 'SSP2_NOCC_HTOL_WHEA', 'SSP2_NOCC_MealyBug_CASS', 'SSP2_NoCC_DTOL_SOR'
  ]
  var scenarios = []
  var selectionCount = getRandomInt(1, 15)
  for (var i = 0; i < selectionCount; i++) {
    scenarios.push(potentialScenarios[getRandomInt(0, 30)])
  }
  const scenarioSet = new Set(scenarios)
  var uniqueScenarios = []
  scenarioSet.forEach(sen => uniqueScenarios.push(sen))
  return uniqueScenarios
}

function pickRandomResources () {
  var resources = []
  var selectionCount = getRandomInt(2, 6)
  for (var i = 0; i < selectionCount; i++) {
    resources.push(faker.fake('{{internet.url}}'))
  }
  const resourcesSet = new Set(resources)
  var uniqueResources = []
  resourcesSet.forEach(tag => uniqueResources.push(tag))
  return uniqueResources
}

function pickRandomLocations (i) {
  var potentialLocations = [
    'ABW', 'AFG', 'AGO', 'AIA', 'ALB', 'ALD', 'AND', 'ARE', 'ARG', 'ARM', 'ASM', 'ATA', 'ATC', 'ATF', 'ATG', 'AUS', 'AUT', 'AZE',
    'BDI', 'BEL', 'BEN', 'BFA', 'BGD', 'BGR', 'BHR', 'BHS', 'BIH', 'BLM', 'BLR', 'BLZ', 'BMU', 'BOL', 'BRA', 'BRB', 'BRN', 'BTN',
    'BWA', 'CAF', 'CAN', 'CHE', 'CHL', 'CHN', 'CIV', 'CLP', 'CMR', 'CNM', 'COD', 'COG', 'COK', 'COL', 'COM', 'CPV', 'CRI', 'CSI',
    'CUB', 'CUW', 'CYM', 'CYN', 'CYP', 'CZE', 'DEU', 'DJI', 'DMA', 'DNK', 'DOM', 'DZA', 'ECU', 'EGY', 'ERI', 'ESB', 'ESP', 'EST',
    'ETH', 'FGY', 'FIN', 'FJI', 'FLK', 'FRA', 'FRO', 'FSM', 'GAB', 'GAZ', 'GBR', 'GEO', 'GGY', 'GHA', 'GIB', 'GIN', 'GMB', 'GNB',
    'GNQ', 'GRC', 'GRD', 'GRL', 'GTM', 'GUM', 'GUY', 'HKG', 'HMD', 'HND', 'HRV', 'HTI', 'HUN', 'IDN', 'IMN', 'IND', 'IOA', 'IOT',
    'IRL', 'IRN', 'IRQ', 'ISL', 'ISR', 'ITA', 'JAM', 'JEY', 'JOR', 'JPN', 'KAB', 'KAS', 'KAZ', 'KEN', 'KGZ', 'KHM', 'KIR', 'KNA',
    'KNM', 'KOR', 'KOS', 'KWT', 'LAO', 'LBN', 'LBR', 'LBY', 'LCA', 'LIE', 'LKA', 'LSO', 'LTU', 'LUX', 'LVA', 'MAC', 'MAF', 'MAR',
    'MCO', 'MDA', 'MDG', 'MDV', 'MEX', 'MHL', 'MKD', 'MLI', 'MLT', 'MMR', 'MNE', 'MNG', 'MNP', 'MOZ', 'MRT', 'MSR', 'MUS', 'MWI',
    'MYS', 'NAM', 'NCL', 'NER', 'NFK', 'NGA', 'NIC', 'NIU', 'NLD', 'NOR', 'NPL', 'NRU', 'NZL', 'OMN', 'PAK', 'PAN', 'PCN', 'PER',
    'PHL', 'PLW', 'PNG', 'POL', 'PRI', 'PRK', 'PRT', 'PRY', 'PYF', 'QAT', 'ROU', 'RUS', 'RWA', 'SAH', 'SAU', 'SDN', 'SDS', 'SEN',
    'SGP', 'SGS', 'SHN', 'SLB', 'SLE', 'SLV', 'SMR', 'SOL', 'SOM', 'SPM', 'SRB', 'STP', 'SUR', 'SVK', 'SVN', 'SWE', 'SWZ', 'SXM',
    'SYC', 'SYR', 'TCA', 'TCD', 'TGO', 'THA', 'TJK', 'TKM', 'TLS', 'TON', 'TTO', 'TUN', 'TUR', 'TUV', 'TWN', 'TZA', 'UGA', 'UKR',
    'UMI', 'URY', 'USA', 'USG', 'UZB', 'VAT', 'VCT', 'VEN', 'VGB', 'VIR', 'VNM', 'VUT', 'WEB', 'WLF', 'WSB', 'WSM', 'YEM', 'ZAF',
    'ZMB', 'ZWE'
  ]
  var locations = []

  if (i < 255) locations.push(potentialLocations[i])

  var selectionCount = getRandomInt(0, 3)
  if (i >= 255) selectionCount = 0

  var x = 0
  do {
    locations.push(potentialLocations[getRandomInt(1, 253)])
    x++
  }
  while (x < selectionCount)
  var locationSet = new Set(locations)
  var uniqueLocations = []
  locationSet.forEach(loc => uniqueLocations.push(loc))

  return uniqueLocations
}

function pickRandomTags () {
  var potentialTags = [
    'global-futures', 'technologies', 'adaptation', 'improved-varieties', 'pest-control',
    'baseline', 'water', 'climate-change', 'famine', 'hunger', 'agriculture', 'legumes',
    'rice', 'food-relief', 'over-farming', 'nutrition'
  ]
  var tags = []
  var selectionCount = getRandomInt(1, 4)
  for (var i = 0; i < selectionCount; i++) {
    tags.push(potentialTags[getRandomInt(0, 15)])
  }
  var tagSet = new Set(tags)
  var uniqueTags = []
  tagSet.forEach(tag => uniqueTags.push(tag))
  return uniqueTags
}

function generateMock (i, chart, group, translatedGroup, commodities) {
  var author = pickRandomAuthor()
  var date = faker.fake('{{date.past}}')
  date = new Date(date)
  date = `${date.getMonth() + 1}/${date.getDate()}/${1900 + date.getYear()}`
  var url = faker.fake('{{internet.url}}')
  var articleType = pickRandomType()
  var projectName = pickRandomProjectName(articleType)
  var tags = pickRandomTags()
  var locations = pickRandomLocations(i)
  var scenarios = pickRandomScenarios()
  var resources = pickRandomResources()
  var articleH1 = toTitleCase(faker.fake('{{lorem.words}}'))
  var articleH2 = toTitleCase(faker.fake('{{lorem.words}}'))
  var articleH3 = toTitleCase(faker.fake('{{lorem.words}}'))

  var name = faker.fake(translatedGroup + ' ' + chart + '-{{lorem.word}}-{{lorem.word}}')
  var fileName = name.replace(/ /g, '-').toLowerCase()
  var title = toTitleCase(faker.fake((translatedGroup + ' ' + chart + ' ' + '{{lorem.word}} {{lorem.word}}')))
  var figure = `%!%chart
  mark: ${chart}
  title: chart
  encoding:
    x:
      type: nominal
      field: agg_continent
    y:
      type: quantitative
      field: Val
  fixed:
    year: 2010
    impactparameter: QDXAgg
    agg_commodity: ${group.toLowerCase()}
  dropdown:
    field: commodity
    values: ${commaSeparate(commodities)}
%!%`.replace(/%!%/g, '```')

  var map = `%!%map
title: chart
aggregation: country
%!%`.replace(/%!%/g, '```')

  var article = faker.fake(`# ${articleH1}\n{{lorem.paragraph}}\n\n${figure}\n\n# ${articleH2}\n{{lorem.paragraphs}}{{lorem.paragraphs}}\n\n${map}\n\n# ${articleH3}\n{{lorem.paragraphs}}\n`)

  var resourceString = ''
  resources.forEach((res) => {
    resourceString += '  - ' + res + '\n'
  })
  resourceString = resourceString.substring(0, resourceString.length - 1)

  var locationString = ''
  locations.forEach((loc) => {
    locationString += '  - ' + loc + '\n'
  })
  locationString = locationString.substring(0, locationString.length - 1)

  var commodityString = ''
  commodities.forEach((loc) => {
    commodityString += '  - ' + loc + '\n'
  })
  commodityString = commodityString.substring(0, commodityString.length - 1)

  var scenarioString = ''
  scenarios.forEach((scen) => {
    scenarioString += '  - ' + scen + '\n'
  })
  scenarioString = scenarioString.substring(0, scenarioString.length - 1)

  var tagsString = ''
  tags.forEach((tag) => {
    tagsString += '  - ' + tag + '\n'
  })
  tagsString = tagsString.substring(0, tagsString.length - 1)

  var output = `---
title: ${title}
author: ${author}
date: ${date}
report url: ${url}
type: ${articleType}
project: ${projectName}
locations:
${locationString}
commodities:
${commodityString}
tags:
${tagsString}
resources:
${resourceString}
scenarios:
${scenarioString}
---
${article}`

  fs.writeFileSync(`./app/assets/data/articles/${fileName}.md`, output)
}

glob('app/assets/data/articles/*.md', (err, files) => {
  if (err) console.warn(err)
  files.forEach((file) => {
    fs.stat(file, (err, stats) => {
      if (err) console.warn(err)
      fs.unlink(file, (err) => {
        if (err) console.warn(err)
      })
    })
  })
})

var commodityGroups = Object.keys(potentialCommodities)
var untranslatedGroups = commodityGroups.map(function (group) {
  return untranslate(group)
})
for (let i = 0; i < 5; i++) {
  potentialCharts.forEach((chart) => {
    commodityGroups.forEach((group, i) => {
      group = untranslatedGroups[i]
      var commodities = potentialCommodities[commodityGroups[i]]
      generateMock(i, chart, group, commodityGroups[i], commodities)
    })
  })
}

console.log('Simulated articles saved to ./app/assets/data/articles')
