'use strict'

import _ from 'lodash'
import { translationData } from '../../data/translation'

export const translate = (str) => translationData[str]

export const untranslate = (str) => _.invert(translationData)[str]

export const invertCommodities = (commodities) => {
  const inverted = {}
  _.forEach(commodities, (category, item) => {
    if (!inverted[category]) inverted[category] = []
    inverted[category].push(item)
  })
  return inverted
}

export const countryIdsToContinents = (countries) => {
  const continents = _.map(countries, (attributes, id) => {
    const continent = attributes.continent
    if (!continents[continent]) {
      continents[continent] = []
    }
    return {
      id: id,
      region: attributes.region,
      subcontinent: attributes.subcontinent
    }
  })
  return continents
}

export const countryIdsToSubontinents = (countries) => {
  const subcontinents = _.map(countries, (attributes, id) => {
    const subcontinent = attributes.subcontinent
    if (!subcontinents[subcontinent]) {
      subcontinents[subcontinent] = []
    }
    return {
      id: id,
      region: attributes.region,
      continent: attributes.continent
    }
  })
  return subcontinents
}
