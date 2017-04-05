'use strict'
import { combineReducers } from 'redux'

import article from './article'
import home from './home'

export const reducers = {
  article,
  home
}

export default combineReducers(Object.assign({}, reducers, {
}))
