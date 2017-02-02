'use strict'

export const loadText = (url) => {
  return fetch(url)
    .then((response) => {
      if (response.status === 200) {
        return response.text()
      } else {
        return false
      }
    })
    .then((response) => {
      return response
    })
}
