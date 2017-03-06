import marked from 'marked'
import yaml from 'js-yaml'

import makeChart from './make-chart'
import makeMap from './make-map'

export const setupRenderer = () => {
  const renderer = new marked.Renderer()
  renderer.code = (code, lang, escaped) => {
    const data = yaml.load(code)
    if (data.type === 'chart') {
      return makeChart(data)
    } else if (data.type === 'map') {
      return makeMap(data)
    }
  }
  return renderer
}
