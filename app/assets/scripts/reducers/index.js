import { combineReducers } from 'redux'

import project from './project'

export const reducers = {
  def: (state = {}, action) => state,
  project
}

export default combineReducers(Object.assign({}, reducers, {
}))
