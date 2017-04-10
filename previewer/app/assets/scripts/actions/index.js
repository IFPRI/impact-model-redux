import marked from 'marked'
import fm from 'front-matter'

import { setupRenderer } from '../utils/parse-figures'

export const UPDATE_TEXT = 'UPDATE_TEXT'
export const UPDATE_CHART = 'UPDATE_CHART'

export const updateChart = (chartMarkup, id) => {
  return { type: UPDATE_CHART, data: chartMarkup, id }
}

export const updateText = (text) => {
  return { type: UPDATE_TEXT, data: text }
}

export const parseText = (text) => {
  return (dispatch) => {
    const renderer = setupRenderer(dispatch)
    text = marked(fm(text).body, {renderer: renderer})
    dispatch(updateText(text))
  }
}
