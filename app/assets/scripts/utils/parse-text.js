'use strict'
import marked from 'marked'
import yaml from 'js-yaml'

// Actions
import { updateFigures } from '../actions'

export const setupRenderer = (dispatch) => {
  const figures = {}
  const renderer = new marked.Renderer()
  renderer.code = (code, lang, escaped) => {
    const data = yaml.load(code)
    const id = `${lang}-${data.title}`
    figures[id] = data
    dispatch(updateFigures(figures))
    if (lang === 'chart') {
      return `<figure class="${id}"></figure>`
    } else if (lang === 'map') {
      return `<figure class="${id}"></figure>`
    }
  }
  return renderer
}
