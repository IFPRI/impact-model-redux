'use strict'
import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

// Components
import BrowseFilters from '../components/browse-filters.js'
import BrowseList from '../components/browse-list.js'

class ScenarioBrowse extends React.Component {
  render () {
    let scenarios = this.props.articles.filter((article) => article.type === 'scenario')
    const filters = this.props.articleFilters
    if (filters.length) {
      scenarios = scenarios.filter((scenario) => {
        const metadata = _.concat(scenario.commodities, scenario.locations, scenario.project).filter((item) => item)
        return _.intersection(metadata, filters).length
      })
    }
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
        <BrowseFilters articleFilters={this.props.articleFilters} dispatch={this.props.dispatch} />
        <BrowseList articles={scenarios} path={this.props.route.path} />
      </div>
    )
  }
}

// Set default props
ScenarioBrowse.propTypes = {
  dispatch: React.PropTypes.func,
  articles: React.PropTypes.array,
  articleFilters: React.PropTypes.array,
  route: React.PropTypes.object
}

// /////////////////////////////////////////////////////////////////// //
// Connect functions

const mapStateToProps = (state) => {
  return {
    articles: state.article.articles,
    articleFilters: state.article.articleFilters
  }
}

module.exports = connect(mapStateToProps)(ScenarioBrowse)
