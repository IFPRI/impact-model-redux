export const UPDATE_ARTICLES = 'UPDATE_ARTICLES'
export const UPDATE_ARTICLE = 'UPDATE_ARTICLE'
export const UPDATE_FILTERS = 'UPDATE_FILTERS'
export const UPDATE_ARTICLE_SORTING = 'UPDATE_ARTICLE_SORTING'

export function updateArticles (data) {
  return { type: UPDATE_ARTICLES, data: data }
}

export function updateArticle (data) {
  return { type: UPDATE_ARTICLE, data: data }
}

export function updateFilters (data) {
  return { type: UPDATE_FILTERS, data: data }
}

export function updateArticleSorting (data) {
  return { type: UPDATE_ARTICLE_SORTING, data: data }
}
