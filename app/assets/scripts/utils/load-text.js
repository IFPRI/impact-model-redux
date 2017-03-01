'use strict'
import fetch from 'isomorphic-fetch'

import config from '../utils'

export const loadText = (url) => {
  return fetch(`${config.baseUrl}/${url}`)
    .then((response) => {
      if (response.status === 200) {
        return response.text()
      } else {
        return false
      }
    })
    .then((response) => {
      return response
    })
}
