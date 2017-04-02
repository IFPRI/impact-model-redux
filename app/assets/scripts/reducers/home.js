'use strict'

import { UPDATE_SELECTED_PROJECT } from '../actions'

export const initialState = {
  selectedProject: null,
  selectedProjectHeight: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_PROJECT:
      return { selectedProject: action.project, selectedProjectHeight: action.height }
    default:
      return state
  }
}
