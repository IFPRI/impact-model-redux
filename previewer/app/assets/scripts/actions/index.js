import marked from 'marked'
import fm from 'front-matter'

import { setupRenderer } from '../utils/parse-figures'

export const UPDATE_TEXT = 'UPDATE_TEXT'
export const UPDATE_CHART = 'UPDATE_CHART'
export const UPDATE_ERROR = 'UPDATE_ERRROR'

export const updateChart = (chartMarkup, id) => {
  return { type: UPDATE_CHART, data: chartMarkup, id }
}

export const updateText = (text) => {
  return { type: UPDATE_TEXT, data: text }
}

export const updateError = (error) => {
  return { type: UPDATE_ERROR, data: error }
}

export const parseText = (text) => {
  return (dispatch) => {
    const renderer = setupRenderer(dispatch)
    try {
      text = marked(fm(text).body, {renderer: renderer})
      dispatch(updateText(text))
      dispatch(updateError(''))
    } catch (err) {
      dispatch(updateError(err.message))
    }
  }
}
