'use strict'

import { UPDATE_SELECTED_PROJECT } from '../actions'
import filterCategories from '../../data/filter-categories'

export const initialState = {
  selectedProject: filterCategories.projects[0]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_PROJECT:
      return { selectedProject: action.data }
    default:
      return state
  }
}
