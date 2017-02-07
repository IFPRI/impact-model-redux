'use strict'
import _ from 'lodash'

export const findRelatedArticles = (articleMetadata, articles, desiredMatches) => {
  const relatedArticles = articles.filter((article) => article.id !== articleMetadata.id)
    .map((article) => {
      const count = _.intersection(article.tags, articleMetadata.tags).length
      return Object.assign({}, article, {count})
    })
    .sort((a, b) => b.count - a.count)

  return relatedArticles.slice(0, desiredMatches || 3)
}

export const findProjectArticles = (articleMetadata, articles, project, desiredMatches) => {
  const filteredArticles = articles.filter((article) => article.project === project)
  return findRelatedArticles(articleMetadata, filteredArticles, desiredMatches)
}
