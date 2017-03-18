'use strict'
import React from 'react'
import _ from 'lodash'
import c from 'classnames'

// Components
import PageHeader from '../components/page-header'
import PageFooter from '../components/page-footer'

export class App extends React.Component {
  //
  // Start render methods
  //
  render () {
    const pageClass = _.get(_.last(this.props.routes), 'path')
    return (
      <div className={c('page', pageClass)}>
        <main className='page__body' role='main'>
          <PageHeader page={pageClass}/>
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

export default App
