import { combineReducers } from 'redux'

import projects from './projects'

export const reducers = {
  def: (state = {}, action) => state,
  projects
}

export default combineReducers(Object.assign({}, reducers, {
}))
