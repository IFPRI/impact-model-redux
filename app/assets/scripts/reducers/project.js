'use strict'
import { set } from 'object-path'
import projects from '../../data/projects.json'
import {
  PROJECTS,
  PROJECT
} from '../actions'

export const initialState = {
  projects: projects,
  project: 'accusamus-vitae-consequatur'
}

export default function reducer (state = initialState, action) {
  state = Object.assign({}, state)
  switch (action.type) {
    case PROJECTS:
      set(state, 'projects', action.data)
      break
    case PROJECT:
      set(state, 'project', action.data)
      break
  }
  return state
}
