'use strict'

export const loadArticle = (url) => {
  return fetch('http://localhost:3000/' + url)
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
