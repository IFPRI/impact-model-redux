export const UPDATE_ARTICLES = 'UPDATE_ARTICLES'
export const UPDATE_ARTICLE = 'UPDATE_ARTICLE'

export function updateArticles (data) {
  return { type: UPDATE_ARTICLES, data: data }
}

export function updateArticle (data) {
  return { type: UPDATE_ARTICLE, data: data }
}
