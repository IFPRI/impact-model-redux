'use strict'
import marked from 'marked'
import yaml from 'js-yaml'
import md5 from 'browser-md5'

// Actions
import { updateChart, updateMap } from '../actions'

export const setupRenderer = (dispatch) => {
  const renderer = new marked.Renderer()
  renderer.code = (code, lang, escaped) => {
    const data = yaml.load(code)
    const id = `fig-${md5(data.title).slice(0, 12)}`
    // convert dropdown values from string to array
    if (data.dropdown) data.dropdown.values = data.dropdown.values.split(',').map(a => a.trim())
    if (lang === 'chart') {
      dispatch(updateChart(data, id))
      return `<div class="${id} figure-container"></div>`
    } else if (lang === 'map') {
      dispatch(updateMap(data, id))
      return `<div class="${id} figure-container"></div>`
    }
  }
  return renderer
}
