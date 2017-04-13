'use strict'
import { set } from 'object-path'

import {
  UPDATE_TEXT,
  UPDATE_HTML,
  UPDATE_CHART,
  UPDATE_ERROR
} from '../actions'

export const initialState = {
  text: '# IFPRI IMPACT Model Syntax Playground\n\nThis previewer is connected to the same database that drives the IFPRI IMPACT Model publishing system.\n\nUse the code window to test the syntax used to develop data-driven article figures.',
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
