'use strict'
import marked from 'marked'
import yaml from 'js-yaml'

// Actions
import { updateChart, updatePreviewerChart, updateMap } from '../actions'

export const setupRenderer = (dispatch, previewer) => {
  const renderer = new marked.Renderer()
  renderer.table = (header, body) => {
    return `<div class="table-wrapper"><table><thead>${header}</thead><tbody>${body}</tbody></table></div>`
  }
  renderer.code = (code, lang) => {
    try {
      const data = yaml.load(code)
      const id = `fig-${Math.random().toString(36).substring(7)}`
      data.id = id
      // convert dropdown & series values from string to array
      Object.keys(data).forEach(dataKey => {
        if (dataKey.match(/dropdown/) || dataKey === 'series') {
          data[dataKey].values = data[dataKey].values.split(',').map(a => a.trim())
          if (data[dataKey].shown) data[dataKey].shown = data[dataKey].shown.split(',').map(a => a.trim())
        }
      })

      if (previewer && lang === 'chart') {
        dispatch(updatePreviewerChart(data, id))
        return `<div style="width:calc(${data.width} - 2rem)" class="${id} figure-container chart-figure"></div>`
      }

      if (!previewer) {
        if (lang === 'chart') {
          dispatch(updateChart(data, id))
          return `<div style="width:${data.width}" class="${id} figure-container chart-figure"></div>`
        } else if (lang === 'map') {
          dispatch(updateMap(data, id))
          return `<div class="${id} figure-container map-figure"></div>`
        }
      }
    } catch (err) {
      throw new Error(err)
    }
  }

  return renderer
}
