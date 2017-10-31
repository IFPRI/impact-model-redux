'use strict'

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

const formatNumber = (num, label) => {
  if (label) num = num[label]
  const abs = Math.abs(num)
  if (abs < 1) return `${(num * 100).toFixed(2)} %`
  if (abs < 100) return num.toFixed(2)
  return Math.round(num).toLocaleString()
}
window.formatNumber = formatNumber
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
