import fetch from 'isomorphic-fetch'
import marked from 'marked'
import fm from 'front-matter'

import config from '../config.js'

export const UPDATE_ARTICLES = 'UPDATE_ARTICLES'
export const UPDATE_ARTICLE_FILTERS = 'UPDATE_ARTICLE_FILTERS'
export const UPDATE_ARTICLE_SORTING = 'UPDATE_ARTICLE_SORTING'
export const UPDATE_ARTICLE_PAGE = 'UPDATE_ARTICLE_PAGE'
export const UPDATE_ARTICLE_LOADING = 'UPDATE_ARTICLE_LOADING'
export const UPDATE_ARTICLE = 'UPDATE_ARTICLE'

export const updateArticles = (articles) => {
  return { type: UPDATE_ARTICLES, data: articles }
}

export const updateArticleFilters = (articleFilters) => {
  return { type: UPDATE_ARTICLE_FILTERS, data: articleFilters }
}

export const updateArticleSorting = (articleSorting) => {
  return { type: UPDATE_ARTICLE_SORTING, data: articleSorting }
}

export const updateArticlePage = (articlePage) => {
  return { type: UPDATE_ARTICLE_PAGE, data: articlePage }
}

// < internal article fetching actions
export const updateArticleLoading = (bool) => {
  return { type: UPDATE_ARTICLE_LOADING, data: bool }
}
export const updateArticle = (article) => {
  return { type: UPDATE_ARTICLE, data: article }
}
export const fetchArticle = (url) => {
  return (dispatch) => {
    dispatch(updateArticleLoading(true))
    return fetch(`${config.baseUrl}/${url}`)
    .then(response => {
      return response.text()
    }).then(text => {
      text = marked(fm(text).body)
      dispatch(updateArticle(text))
      dispatch(updateArticleLoading(false))
    })
  .catch(error => {
    dispatch(updateArticleLoading(false))
    throw (error)
  })
  }
}
// />
