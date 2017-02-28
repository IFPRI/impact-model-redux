'use strict'

export const parsePath = (path) => {
  const articleId = (path).split('/')
  return articleId[articleId.length - 1].split('?')[0]
}

export const loadArticle = (url) => {
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
