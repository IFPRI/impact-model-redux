'use strict'
import { combineReducers } from 'redux'

import article from './article'
import previewer from './previewer'

export const reducers = {
  article,
  previewer
}

export default combineReducers(Object.assign({}, reducers, {
}))
