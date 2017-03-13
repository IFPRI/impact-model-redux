'use strict'
import { combineReducers } from 'redux'

import article from './article'

export const reducers = {
  article
}

export default combineReducers(Object.assign({}, reducers, {
}))
