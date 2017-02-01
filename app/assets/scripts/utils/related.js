'use strict'
import _ from 'lodash'
import { slugify } from './format.js'

export const findRelatedArticles = (articleMetadata, articles, desiredMatches) => {
  if (Object.keys(articleMetadata).length) {
    desiredMatches = desiredMatches || 3
    const articleTags = articleMetadata.tags
    delete articles[slugify(articleMetadata.title)]

    let allNames = []
    let relatedArticles = []
    Object.keys(articles).forEach((articleName) => {
      allNames.push(articleName)
      const article = articles[articleName]
      const matches = _.intersection(article.tags, articleTags).length
      article.id = slugify(article.title)
      article.matches = matches
      if (matches > 0) {
        relatedArticles.push(article)
      }
    })
    relatedArticles = _.sortBy(relatedArticles, ['matches'])

    let relatedCount = relatedArticles.length
    if (relatedCount >= desiredMatches) {
      // return n related articles
      return relatedArticles.slice(Math.max(relatedCount - desiredMatches, 1))
    } else {
      // if less than n related articles, add randomly selected articles
      while (relatedCount < 3) {
        let randomName = allNames[Math.floor(Math.random() * allNames.length)]
        relatedArticles.push(articles[randomName])
        relatedCount = relatedArticles.length
      }
      return relatedArticles
    }
  }
}
