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
import About from './views/about'
import Contact from './views/contact'
import BriefBrowse from './views/brief-browse'
import Brief from './views/brief'
import ScenarioBrowse from './views/scenario-browse'
import Scenario from './views/scenario'
import UhOh from './views/uhoh'

render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <Route path='about' component={About} />
        <Route path='contact' component={Contact} />
        <Route path='briefs' component={BriefBrowse} />
        <Route path='scenarios' component={ScenarioBrowse} />
        <Route path='briefs/:id' component={Brief} />
        <Route path='scenarios/:id' component={Scenario} />
        <IndexRoute component={Home} pageClass='page--homepage' />
        <Route path='*' component={UhOh} />
      </Route>
    </Router>
  </Provider>
), document.querySelector('#app-container'))
