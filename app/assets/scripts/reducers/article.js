'use strict'
import { set } from 'object-path'
import articles from '../../data/articles.json'
import {
  ARTICLES,
  ARTICLE
} from '../actions'

export const initialState = {
  articles: articles,
  article: 'accusamus-vitae-consequatur'
}

export default function reducer (state = initialState, action) {
  state = Object.assign({}, state)
  switch (action.type) {
    case ARTICLES:
      set(state, 'articles', action.data)
      break
    case ARTICLE:
      set(state, 'article', action.data)
      break
  }
  return state
}
