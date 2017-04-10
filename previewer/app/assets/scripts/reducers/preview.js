'use strict'
import { set } from 'object-path'

import {
  UPDATE_TEXT,
  UPDATE_CHART
} from '../actions'

export const initialState = {
  text: '',
  charts: {}
}

export default (state = initialState, action) => {
  state = Object.assign({}, state)
  switch (action.type) {
    case UPDATE_TEXT:
      set(state, 'text', action.data)
      break
    case UPDATE_CHART:
      set(state, `charts.${action.id}`, action.data)
      break
  }
  return state
}
