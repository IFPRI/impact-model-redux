'use strict'
import { set } from 'object-path'
import articles from '../../data/articles.json'
import {
  UPDATE_ARTICLES,
  UPDATE_ARTICLE,
  UPDATE_FILTERS,
  UPDATE_ARTICLE_SORTING
} from '../actions'

export const initialState = {
  articles: articles,
  article: 'accusamus-vitae-consequatur',
  articleFilters: [],
  articleSorting: 'recency'
}

export default function reducer (state = initialState, action) {
  state = Object.assign({}, state)
  switch (action.type) {
    case UPDATE_ARTICLES:
      set(state, 'articles', action.data)
      break
    case UPDATE_ARTICLE:
      set(state, 'article', action.data)
      break
    case UPDATE_FILTERS:
      set(state, 'articleFilters', action.data)
      break
    case UPDATE_ARTICLE_SORTING:
      set(state, 'articleSorting', action.data)
      break
  }
  return state
}
