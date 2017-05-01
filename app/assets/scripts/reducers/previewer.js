'use strict'
import { set } from 'object-path'

import {
  UPDATE_PREVIEWER_TEXT,
  UPDATE_PREVIEWER_HTML,
  UPDATE_PREVIEWER_CHART,
  UPDATE_PREVIEWER_ERROR
} from '../actions'

export const initialState = {
  text: `## IFPRI IMPACT Model - Syntax Playground
This previewer is connected to the same database that drives the IFPRI IMPACT Model publishing system.
Use the code widget to test the syntax used to develop data-driven figures.

In addition to the attributes used to query the database, user-defined parameters include:
- __width__ - number with %, px, or rem - defaults to __100%__
- __legend__ - top, bottom, left, right, or omitted for none - defaults to __none__`,
  html: '',
  charts: {},
  error: ''
}

export default (state = initialState, action) => {
  state = Object.assign({}, state)
  switch (action.type) {
    case UPDATE_PREVIEWER_TEXT:
      set(state, 'text', action.data)
      break
    case UPDATE_PREVIEWER_HTML:
      set(state, 'html', action.data)
      break
    case UPDATE_PREVIEWER_CHART:
      set(state, `charts.${action.id}`, action.data)
      break
    case UPDATE_PREVIEWER_ERROR:
      set(state, 'error', action.data)
      break
  }
  return state
}
