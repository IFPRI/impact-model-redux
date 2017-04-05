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
  const isNegative = number < 0
  number = Math.abs(number)
  if (number) {
    if (number < 0.01) number = number.toFixed(6)
    if (number < 1 && number >= 0.01) number = number.toFixed(4)
    if (number < 100 && number >= 1) number = number.toFixed(2)
    if (number >= 100) number = Math.round(number)
    if (isNegative) number = -number
  }
  return Number(number).toLocaleString()
}

module.exports = {
  cutAtWord,
  commaSeparate,
  toTitleCase,
  formatNumber
}
