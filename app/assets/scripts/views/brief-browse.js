'use strict'
import React from 'react'
import { connect } from 'react-redux'

// Components
import BrowseFilters from '../components/browse-filters.js'
import BrowseList from '../components/browse-list.js'

class BriefBrowse extends React.Component {
  render () {
    const briefs = this.props.articles.filter((article) => article.type === 'brief')
    return (
      <div className='page__browse'>
        <section className='header__internal'>
          <div className='row'>
            <div className='browse__header-text'>
              <h2 className='header--xlarge'>Briefs</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut augue aliquet ligula aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut augue aliquet ligula aliquam.</p>
            </div>
          </div>
        </section>
        <BrowseFilters />
        <BrowseList articles={briefs} path={this.props.route.path} />
      </div>
    )
  }
}

// Set default props
BriefBrowse.propTypes = {
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

module.exports = connect(mapStateToProps)(BriefBrowse)
