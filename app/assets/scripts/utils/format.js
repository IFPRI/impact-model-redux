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

const formatNumber = (number, label) => {
  if (label) return Math.round(number[label]).toLocaleString()
  return Math.round(number).toLocaleString()
}

module.exports = {
  cutAtWord,
  commaSeparate,
  toTitleCase,
  formatNumber
}
