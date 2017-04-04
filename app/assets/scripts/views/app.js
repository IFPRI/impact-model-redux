'use strict'
import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import c from 'classnames'

// Components
import PageHeader from '../components/page-header'
import PageFooter from '../components/page-footer'

export class App extends React.Component {
  render () {
    const pageClass = _.get(_.last(this.props.routes), 'path')
    return (
      <div className={c('page', pageClass, { 'mobile-filters-open': this.props.mobileFiltersOpen })}>
        <main className='page__body' role='main'>
          <PageHeader page={pageClass}/>
          {this.props.children}
          <PageFooter />
        </main>
      </div>
    )
  }
}

App.propTypes = {
  routes: React.PropTypes.array,
  children: React.PropTypes.object,
  mobileFiltersOpen: React.PropTypes.bool
}

function mapStateToProps (state) {
  return {
    mobileFiltersOpen: state.article.mobileFiltersOpen
  }
}

export default connect(mapStateToProps)(App)
