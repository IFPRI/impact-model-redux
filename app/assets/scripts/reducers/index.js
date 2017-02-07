import { combineReducers } from 'redux'

import article from './article'

export const reducers = {
  def: (state = {}, action) => state,
  article
}

export default combineReducers(Object.assign({}, reducers, {
}))
