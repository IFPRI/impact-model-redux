'use strict'
import { combineReducers } from 'redux'

import preview from './preview'

export const reducers = {
  preview
}

export default combineReducers(Object.assign({}, reducers, {
}))
