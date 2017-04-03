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
  if (label) number = number[label]
  if (number < 0.01) return number.toFixed(6).toLocaleString()
  if (number < 1) return number.toFixed(4).toLocaleString()
  if (number < 99) return number.toFixed(2).toLocaleString()
  return Math.round(number).toLocaleString()
}

module.exports = {
  cutAtWord,
  commaSeparate,
  toTitleCase,
  formatNumber
}
