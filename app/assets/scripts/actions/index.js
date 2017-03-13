import marked from 'marked'
import fm from 'front-matter'

import { loadText } from '../utils/load-text'
import { setupRenderer } from '../utils/parse-figures'

export const UPDATE_ARTICLES = 'UPDATE_ARTICLES'
export const UPDATE_ARTICLE_FILTERS = 'UPDATE_ARTICLE_FILTERS'
export const UPDATE_ARTICLE_SORTING = 'UPDATE_ARTICLE_SORTING'
export const UPDATE_ARTICLE_PAGE = 'UPDATE_ARTICLE_PAGE'
export const UPDATE_ARTICLE_LOADING = 'UPDATE_ARTICLE_LOADING'
export const UPDATE_ARTICLE = 'UPDATE_ARTICLE'
export const UPDATE_CHARTS = 'UPDATE_CHARTS'
export const UPDATE_MAPS = 'UPDATE_MAPS'

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

export const updateCharts = (chartMarkup) => {
  return { type: UPDATE_CHARTS, data: chartMarkup }
}

export const updateMaps = (mapMarkup) => {
  return { type: UPDATE_MAPS, data: mapMarkup }
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
    loadText(url)
    .then(text => {
      const renderer = setupRenderer(dispatch)
      text = marked(fm(text).body, {renderer: renderer})
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
