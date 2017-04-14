'use strict'
import marked from 'marked'
import yaml from 'js-yaml'
import md5 from 'browser-md5'

// Actions
import { updateChart, updatePreviewerChart, updateMap } from '../actions'

export const setupRenderer = (dispatch, previewer) => {
  const renderer = new marked.Renderer()
  renderer.table = (header, body) => {
    return `<div class="table-wrapper"><table><thead>${header}</thead><tbody>${body}</tbody></table></div>`
  }
  renderer.code = (code, lang, escaped) => {
    const data = yaml.load(code)
    const id = `fig-${md5(data.title).slice(0, 12)}`
    // convert dropdown values from string to array
    Object.keys(data).forEach(dataKey => {
      if (dataKey.match(/scenarios/)) {
        data[dataKey] = data[dataKey].split(',').map(a => a.trim().toUpperCase())
      }
      if (dataKey.match(/dropdown/)) {
        data[dataKey].values = data[dataKey].values.split(',').map(a => a.trim())
      }
    })

    if (previewer) {
      if (lang === 'chart') {
        dispatch(updatePreviewerChart(data, id))
        return `<div style="width:calc(${data.width} - 2rem" class="${id} figure-container chart-figure"></div>`
      }
      return ''
    }

    if (lang === 'chart') {
      dispatch(updateChart(data, id))
      return `<div style="width:${data.width}" class="${id} figure-container chart-figure"></div>`
    } else if (lang === 'map') {
      dispatch(updateMap(data, id))
      return `<div class="${id} figure-container map-figure"></div>`
    }
  }
  return renderer
}
