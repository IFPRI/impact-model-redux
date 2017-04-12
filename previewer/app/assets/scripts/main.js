'use strict'
import React from 'react'
import thunkMiddleware from 'redux-thunk'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

import config from './config'
import reducer from './reducers'

const logger = createLogger({
  level: 'info',
  collapsed: true,
  predicate: (getState, action) => {
    return (config.environment !== 'productio')
  }
})

const store = createStore(reducer, applyMiddleware(
  thunkMiddleware,
  logger
))

// Components
import App from './views/app'

render((
  <App store={store} />
), document.querySelector('#app-container'))
