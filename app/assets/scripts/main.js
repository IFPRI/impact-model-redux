'use strict'
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import config from './config'
import reducer from './reducers'

const logger = createLogger({
  level: 'info',
  collapsed: true,
  predicate: (getState, action) => {
    return (config.environment !== 'production')
  }
})

const store = createStore(reducer, applyMiddleware(logger))

// Components
import App from './views/app'
import Home from './views/home'
import UhOh from './views/uhoh'

render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/uhoh' component={UhOh} />
      <Route path='/' component={App}>
        <IndexRoute component={Home} pageClass='page--homepage' />
      </Route>
    </Router>
  </Provider>
), document.querySelector('#app-container'))
