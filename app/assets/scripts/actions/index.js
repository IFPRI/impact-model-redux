export const UPDATE_ARTICLES = 'UPDATE_ARTICLES'
export const UPDATE_ARTICLE_FILTERS = 'UPDATE_ARTICLE_FILTERS'
export const UPDATE_ARTICLE_SORTING = 'UPDATE_ARTICLE_SORTING'

export function updateArticles (data) {
  return { type: UPDATE_ARTICLES, data: data }
}

export function updateArticleFilters (data) {
  return { type: UPDATE_ARTICLE_FILTERS, data: data }
}

export function updateArticleSorting (data) {
  return { type: UPDATE_ARTICLE_SORTING, data: data }
}
