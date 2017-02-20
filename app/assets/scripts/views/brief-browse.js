'use strict'
import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

// Components
import BrowseFilters from '../components/browse-filters.js'
import BrowseList from '../components/browse-list.js'

class BriefBrowse extends React.Component {
  render () {
    let briefs = this.props.articles.filter((article) => article.type === 'brief')
    const filters = this.props.articleFilters
    if (filters.length) {
      briefs = briefs.filter((brief) => {
        const metadata = _.concat(brief.commodities, brief.locations, brief.project).filter((item) => item)
        const matches = _.intersection(metadata, this.props.articleFilters).length
        brief['matches'] = matches
        return matches
      }).sort((a, b) => a.matches < b.matches)
    }
    return (
      <div className='page__browse'>
        <header className='browse__header'>
          <div className='browse__header-text'>
            <h2>Briefs</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse ut augue aliquet ligula aliquam. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Suspendisse ut augue
              aliquet ligula aliquam.
            </p>
          </div>
        </header>
        <BrowseFilters articleFilters={this.props.articleFilters} dispatch={this.props.dispatch} />
        <BrowseList articles={briefs} path={this.props.route.path} />
      </div>
    )
  }
}

// Set default props
BriefBrowse.propTypes = {
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

module.exports = connect(mapStateToProps)(BriefBrowse)
