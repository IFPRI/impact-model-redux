export const PROJECTS = 'PROJECTS'
export const PROJECT = 'PROJECT'

export function updateProjects (data) {
  return { type: PROJECTS, data: data }
}

export function updateProject (data) {
  return { type: PROJECT, data: data }
}
