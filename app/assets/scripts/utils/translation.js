'use strict'
const _ = require('lodash')

// Data
const translations = require('../../data/translation')

const translate = (str) => translations[str] || str

const untranslate = (str) => _.invert(translations)[str] || str

const invertCommodities = (commodities) => {
  const inverted = {}
  _.forEach(commodities, (category, item) => {
    if (!inverted[category]) inverted[category] = []
    inverted[category].push(item)
  })
  return inverted
}

const countryIdsToContinents = (countries) => {
  const continents = {}
  _.forEach(countries, (attributes, id) => {
    const continent = attributes.continent
    if (!continents[continent]) {
      continents[continent] = []
    }
    if (!continents[continent]) {
      continents[continent] = []
    }
    continents[continent].push({
      id: id,
      region: attributes.region,
      subcontinent: attributes.subcontinent
    })
  })
  return continents
}

const countryIdsToSubcontinents = (countries) => {
  const subcontinents = {}
  _.forEach(countries, (attributes, id) => {
    const subcontinent = attributes.subcontinent
    if (!subcontinents[subcontinent]) {
      subcontinents[subcontinent] = []
    }
    subcontinents[subcontinent].push({
      id: id,
      region: attributes.region,
      continent: attributes.continent
    })
  })
  return subcontinents
}

module.exports = {
  translate,
  untranslate,
  invertCommodities,
  countryIdsToContinents,
  countryIdsToSubcontinents
}
