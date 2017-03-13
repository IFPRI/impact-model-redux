'use strict'
import marked from 'marked'
import yaml from 'js-yaml'

// Actions
import { updateCharts, updateMaps } from '../actions'

export const setupRenderer = (dispatch) => {
  const charts = {}
  const maps = {}
  const renderer = new marked.Renderer()
  renderer.code = (code, lang, escaped) => {
    const data = yaml.load(code)
    const id = `${lang}-${data.title}`
    if (lang === 'chart') {
      charts[id] = data
      dispatch(updateCharts(charts))
      return `<div class="${id} figure-container"></div>`
    } else if (lang === 'map') {
      maps[id] = data
      dispatch(updateMaps(maps))
      return `<div class="${id} figure-container"></div>`
    }
  }
  return renderer
}
