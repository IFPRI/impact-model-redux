'use strict'

import { UPDATE_SELECTED_PROJECT } from '../actions'

export const initialState = {
  selectedProject: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_PROJECT:
      return { selectedProject: action.data }
    default:
      return state
  }
}
