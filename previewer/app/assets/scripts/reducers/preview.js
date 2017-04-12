'use strict'
import { set } from 'object-path'

import {
  UPDATE_TEXT,
  UPDATE_HTML,
  UPDATE_CHART,
  UPDATE_ERROR
} from '../actions'

export const initialState = {
  text: '',
  html: '',
  charts: {},
  error: ''
}

export default (state = initialState, action) => {
  state = Object.assign({}, state)
  switch (action.type) {
    case UPDATE_TEXT:
      set(state, 'text', action.data)
      break
    case UPDATE_HTML:
      set(state, 'html', action.data)
      break
    case UPDATE_CHART:
      set(state, `charts.${action.id}`, action.data)
      break
    case UPDATE_ERROR:
      set(state, 'error', action.data)
      break
  }
  return state
}
