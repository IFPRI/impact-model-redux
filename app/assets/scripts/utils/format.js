'use strict'

const PERCENT_SIGNALS = require('../constants').PERCENT_SIGNALS

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
  return num === Math.round(num) ? num : num.toFixed(2)
}

const formatNumber = (num, label, change) => {
  if (label) num = num[label]
  if (change && change.type && PERCENT_SIGNALS.includes(change.type)) {
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
  formatScenario
}
