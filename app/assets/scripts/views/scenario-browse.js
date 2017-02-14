'use strict'
import React from 'react'
import { connect } from 'react-redux'

// Components
import BrowseFilters from '../components/browse-filters.js'
import BrowseList from '../components/browse-list.js'

class ScenarioBrowse extends React.Component {
  render () {
    const scenarios = this.props.articles.filter((article) => article.type === 'scenario')
    return (
      <div className='page__browse'>
        <header className='browse__header'>
          <div className='browse__header-text'>
            <h2>Scenarios</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse ut augue aliquet ligula aliquam. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Suspendisse ut augue
              aliquet ligula aliquam.
            </p>
          </div>
        </header>
        <BrowseFilters />
        <BrowseList articles={scenarios} path={this.props.route.path} />
      </div>
    )
  }
}

// Set default props
ScenarioBrowse.propTypes = {
  articles: React.PropTypes.array,
  route: React.PropTypes.object
}

// /////////////////////////////////////////////////////////////////// //
// Connect functions

const mapStateToProps = (state) => {
  return {
    articles: state.article.articles
  }
}

module.exports = connect(mapStateToProps)(ScenarioBrowse)
