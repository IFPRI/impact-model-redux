import marked from 'marked'
import fm from 'front-matter'

import { setupRenderer } from '../utils/parse-figures'

export const UPDATE_TEXT = 'UPDATE_TEXT'
export const UPDATE_HTML = 'UPDATE_HTML'
export const UPDATE_CHART = 'UPDATE_CHART'
export const UPDATE_ERROR = 'UPDATE_ERRROR'

export const updateText = (text) => {
  return { type: UPDATE_TEXT, data: text }
}

export const updateHTML = (text) => {
  return { type: UPDATE_HTML, data: text }
}

export const updateChart = (chartMarkup, id) => {
  return { type: UPDATE_CHART, data: chartMarkup, id }
}

export const updateError = (error) => {
  error = error.message || error
  return { type: UPDATE_ERROR, data: error }
}

export const parseText = (text) => {
  return (dispatch) => {
    dispatch(updateText(text))
    const renderer = setupRenderer(dispatch)
    try {
      text = marked(fm(text).body, {renderer: renderer})
      dispatch(updateHTML(text))
      dispatch(updateError(''))
    } catch (err) {
      dispatch(updateError(err.message))
    }
  }
}
