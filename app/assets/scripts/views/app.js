'use strict'
import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import c from 'classnames'

// Components
import PageHeader from '../components/page-header'
import PageFooter from '../components/page-footer'

class App extends React.Component {
  //
  // Start render methods
  //
  render () {
    const pageClass = _.get(_.last(this.props.routes), 'pageClass', '')
    return (
      <div className={c('page', pageClass)}>
        <main className='page__body' role='main'>
          <PageHeader />
          {this.props.children}
          <PageFooter />
        </main>
      </div>
    )
  }
}

// Set default props
App.propTypes = {
  routes: React.PropTypes.array,
  children: React.PropTypes.object
}

// /////////////////////////////////////////////////////////////////// //
// Connect functions

const mapStateToProps = (state) => {
  return {
  }
}

module.exports = connect(mapStateToProps)(App)
