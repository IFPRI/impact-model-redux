'use strict'
import React from 'react'
import { connect } from 'react-redux'

// Components
import BrowseFilters from '../components/browse-filters.js'
import BrowseList from '../components/browse-list.js'

const BriefBrowse = React.createClass({
  propTypes: {
    articles: React.PropTypes.array,
    route: React.PropTypes.object
  },

  render: function () {
    const briefs = this.props.articles.filter((article) => article.type === 'brief')
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
        <BrowseFilters />
        <BrowseList articles={briefs} path={this.props.route.path} />
      </div>
    )
  }
})

// /////////////////////////////////////////////////////////////////// //
// Connect functions

function mapStateToProps (state) {
  return {
    articles: state.project.projects
  }
}

module.exports = connect(mapStateToProps)(BriefBrowse)
