'use strict'
import { set } from 'object-path'
import articles from '../../data/articles.json'
import {
  UPDATE_ARTICLES,
  UPDATE_ARTICLE_FILTERS,
  UPDATE_ARTICLE_SORTING,
  UPDATE_ARTICLE_PAGE
} from '../actions'

export const initialState = {
  briefs: articles.filter((article) => article.type === 'brief'),
  scenarios: articles.filter((article) => article.type === 'scenario'),
  articleFilters: [],
  articleSorting: 'recency',
  articlePage: 0
}

export default (state = initialState, action) => {
  state = Object.assign({}, state)
  switch (action.type) {
    case UPDATE_ARTICLES:
      set(state, 'articles', action.data)
      break
    case UPDATE_ARTICLE_FILTERS:
      set(state, 'articleFilters', action.data)
      break
    case UPDATE_ARTICLE_SORTING:
      set(state, 'articleSorting', action.data)
      break
    case UPDATE_ARTICLE_PAGE:
      set(state, 'articlePage', action.data)
      break
  }
  return state
}
