'use strict'

const PERCENT_SIGNALS = require('../constants').PERCENT_SIGNALS

// indexOf but returns all the indices
const ind = (array, value) => array.reduce((a, e, i) => (e === value) ? a.concat(i) : a, [])
const CUT_LENGTH = 15
function twoLiner (string) {
  if (string.length > CUT_LENGTH) {
    const cuts = ind(string.split(''), ' ')
    const dist = cuts.map(c => Math.abs(c - (string.length / 2)))
    const lowestCut = cuts[dist.indexOf(Math.min(...dist))]
    return [string.slice(0, lowestCut), string.slice(lowestCut)]
  } else {
    return string
  }
}

// Extract n characters of preview text, rounded to the closest full word
const cutAtWord = (text, characters) => {
  if (text.length < characters) return text
  var lastCharacter = text.lastIndexOf(' ', characters)
  return text.substring(0, lastCharacter) + '...'
}

const commaSeparate = (array) => array.join(', ')

const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

const conditionalFix = (num) => {
  return Math.abs(num - Math.round(num)) < 0.000001 ? Math.round(num) : num.toFixed(2)
}

const formatNumber = (num, label, data) => {
  if (label) num = num[label]
  if (data && data.format && data.format === 'percentage') return `${conditionalFix(num)} %`
  if (data && data.change && data.change.type && PERCENT_SIGNALS.includes(data.change.type)) {
    return `${conditionalFix(num * 100)} %`
  }
  if (Math.abs(num) < 999) return conditionalFix(num)
  return Math.round(num).toLocaleString()
}

const formatScenario = (scenario) => {
  return scenario.replace('_', '-').toUpperCase()
}

module.exports = {
  cutAtWord,
  commaSeparate,
  toTitleCase,
  formatNumber,
  formatScenario,
  twoLiner
}
