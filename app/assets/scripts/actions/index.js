export const ARTICLES = 'ARTICLES'
export const ARTICLE = 'ARTICLE'

export function updateArticles (data) {
  return { type: ARTICLES, data: data }
}

export function updateArticle (data) {
  return { type: ARTICLE, data: data }
}
