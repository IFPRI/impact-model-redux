'use strict'

import _ from 'lodash'
import { translations } from '../../data/translation'

export const translate = (str) => translations[str]

export const untranslate = (str) => _.invert(translations)[str]

export const invertCommodities = (commodities) => {
  const inverted = {}
  _.forEach(commodities, (category, item) => {
    if (!inverted[category]) inverted[category] = []
    inverted[category].push(item)
  })
  return inverted
}

export const countryIdsToContinents = (countries) => {
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

export const countryIdsToSubcontinents = (countries) => {
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