'use strict'
// Extract n characters of preview text, rounded to the closest full word
export const cutAtWord = (text, characters) => {
  var lastCharacter = text.lastIndexOf(' ', characters)
  return text.substring(0, lastCharacter)
}

export const commaSeparate = (array) => array.join(', ')

export const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

export const formatNumber = (number, label) => {
  if (label) return Math.round(number[label]).toLocaleString()
  return Math.round(number).toLocaleString()
}
