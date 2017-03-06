import marked from 'marked'
import yaml from 'js-yaml'

import makeChart from './make-chart'
import makeMap from './make-map'

import { updateFigures } from '../actions'

export const setupRenderer = () => {
  const renderer = new marked.Renderer()
  renderer.code = (code, lang, escaped) => {
    const data = yaml.load(code)
    if (lang === 'chart') {
      return `<figure class="chart-${data.title}"></figure>`
    } else if (lang === 'map') {
      return `<figure class="map-${data.title}"></figure>`
    }
  }
  return renderer
}
