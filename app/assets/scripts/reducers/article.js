'use strict'
import { set } from 'object-path'
import moment from 'moment'
import articles from '../../data/articles.json'
articles.forEach(article => { article.date = moment(article.date, 'MM/DD/YYYY') })

import {
  UPDATE_ARTICLES,
  UPDATE_ARTICLE_FILTERS,
  UPDATE_ARTICLE_PAGE,
  UPDATE_ARTICLE_LOADING,
  UPDATE_ARTICLE,
  UPDATE_CHART,
  UPDATE_MAP,
  UPDATE_MOBILE_FILTERS
} from '../actions'

export const initialState = {
  briefs: articles.filter((article) => article.type === 'brief'),
  scenarios: articles.filter((article) => article.type === 'scenario'),
  articleFilters: [],
  articlePage: 0,
  articleLoading: false,
  article: '',
  charts: {},
  maps: {},
  mobileFiltersOpen: false
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
    case UPDATE_ARTICLE_PAGE:
      set(state, 'articlePage', action.data)
      break
    case UPDATE_ARTICLE_LOADING:
      set(state, 'articleLoading', action.data)
      break
    case UPDATE_ARTICLE:
      set(state, 'article', action.data)
      break
    case UPDATE_CHART:
      set(state, `charts.${action.id}`, action.data)
      break
    case UPDATE_MAP:
      set(state, `maps.${action.id}`, action.data)
      break
    case UPDATE_MOBILE_FILTERS:
      set(state, 'mobileFiltersOpen', action.data)
  }
  return state
}
