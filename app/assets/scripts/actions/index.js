export const UPDATE_ARTICLES = 'UPDATE_ARTICLES'
export const UPDATE_ARTICLE_FILTERS = 'UPDATE_ARTICLE_FILTERS'
export const UPDATE_ARTICLE_SORTING = 'UPDATE_ARTICLE_SORTING'
export const UPDATE_ARTICLE_PAGE = 'UPDATE_ARTICLE_PAGE'

export function updateArticles (articles) {
  return { type: UPDATE_ARTICLES, data: articles }
}

export function updateArticleFilters (filters) {
  return { type: UPDATE_ARTICLE_FILTERS, data: filters }
}

export function updateArticleSorting (sortRule) {
  return { type: UPDATE_ARTICLE_SORTING, data: sortRule }
}

export function updateArticlePage (page) {
  return { type: UPDATE_ARTICLE_PAGE, data: page }
}
