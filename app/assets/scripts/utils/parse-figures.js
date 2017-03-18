'use strict'
import marked from 'marked'
import yaml from 'js-yaml'
import md5 from 'browser-md5'

// Actions
import { updateCharts, updateMaps } from '../actions'

export const setupRenderer = (dispatch) => {
  const charts = {}
  const maps = {}
  const renderer = new marked.Renderer()
  renderer.code = (code, lang, escaped) => {
    const data = yaml.load(code)
    const id = `fig-${md5(data.title).slice(0, 12)}`
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
