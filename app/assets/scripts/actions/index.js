import marked from 'marked'
import fm from 'front-matter'

import { loadText } from '../utils/load-text'
import { setupRenderer } from '../utils/parse-figures'

export const UPDATE_ARTICLES = 'UPDATE_ARTICLES'
export const UPDATE_ARTICLE_FILTERS = 'UPDATE_ARTICLE_FILTERS'
export const UPDATE_ARTICLE_PAGE = 'UPDATE_ARTICLE_PAGE'
export const UPDATE_ARTICLE_LOADING = 'UPDATE_ARTICLE_LOADING'
export const UPDATE_ARTICLE = 'UPDATE_ARTICLE'
export const UPDATE_CHART = 'UPDATE_CHART'
export const UPDATE_MAP = 'UPDATE_MAP'
export const UPDATE_SELECTED_PROJECT = 'UPDATE_SELECTED_PROJECT'
export const UPDATE_SELECTED_PROJECT_HEIGHT = 'UPDATE_SELECTED_PROJECT_HEIGHT'
export const UPDATE_MOBILE_FILTERS = 'UPDATE_MOBILE_FILTERS'
export const UPDATE_PREVIEWER_TEXT = 'UPDATE_PREVIEWER_TEXT'
export const UPDATE_PREVIEWER_HTML = 'UPDATE_PREVIEWER_HTML'
export const UPDATE_PREVIEWER_CHART = 'UPDATE_PREVIEWER_CHART'
export const UPDATE_PREVIEWER_ERROR = 'UPDATE_PREVIEWER_ERROR'

export const updateArticles = (articles) => {
  return { type: UPDATE_ARTICLES, data: articles }
}

export const updateArticleFilters = (articleFilters) => {
  return { type: UPDATE_ARTICLE_FILTERS, data: articleFilters }
}

export const updateArticlePage = (articlePage) => {
  return { type: UPDATE_ARTICLE_PAGE, data: articlePage }
}

export const updateChart = (chartMarkup, id) => {
  return { type: UPDATE_CHART, data: chartMarkup, id }
}

export const updateMap = (mapMarkup, id) => {
  return { type: UPDATE_MAP, data: mapMarkup, id }
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

export const updateSelectedProject = (project, height) => {
  return { type: UPDATE_SELECTED_PROJECT, project, height }
}

export const updateMobileFilters = open => {
  return { type: UPDATE_MOBILE_FILTERS, data: open }
}

/* ---------------------------
// Previewer actions
// ------- */
export const updatePreviewerText = (text) => {
  return { type: UPDATE_PREVIEWER_TEXT, data: text }
}

export const updatePreviewerHTML = (text) => {
  return { type: UPDATE_PREVIEWER_HTML, data: text }
}

export const updatePreviewerChart = (chartMarkup, id) => {
  return { type: UPDATE_PREVIEWER_CHART, data: chartMarkup, id }
}

export const updatePreviewerError = (error) => {
  error = error.message || error
  return { type: UPDATE_PREVIEWER_ERROR, data: error }
}

export const parsePreviewerText = (text) => {
  return (dispatch) => {
    dispatch(updatePreviewerText(text))
    const renderer = setupRenderer(dispatch)
    try {
      text = marked(fm(text).body, {renderer: renderer})
      dispatch(updatePreviewerHTML(text))
      dispatch(updatePreviewerError(''))
    } catch (err) {
      dispatch(updatePreviewerError(err.message))
    }
  }
}
