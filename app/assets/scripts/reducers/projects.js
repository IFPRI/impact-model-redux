'use strict'
import { set } from 'object-path'
import projects from '../../data/projects.json'
import {
  PROJECTS
} from '../actions'

export const initialState = {
  projects: projects
}

export default function reducer (state = initialState, action) {
  state = Object.assign({}, state)
  switch (action.type) {
    case PROJECTS:
      set(state, 'projects', action.data)
      break
  }
  return state
}
