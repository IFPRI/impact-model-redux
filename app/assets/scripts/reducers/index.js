'use strict'
import { combineReducers } from 'redux'

import article from './article'
import home from './home'
import previewer from './previewer'

export const reducers = {
  article,
  home,
  previewer
}

export default combineReducers(Object.assign({}, reducers, {
}))
