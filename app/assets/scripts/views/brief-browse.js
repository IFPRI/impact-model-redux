'use strict'
import React from 'react'
import { connect } from 'react-redux'

// Components
import BrowseFilters from '../components/browse-filters.js'
import BrowseList from '../components/browse-list.js'

export class BriefBrowse extends React.Component {
  render () {
    return (
      <section className='page__browse'>
        <header className='header__internal'>
          <div className='row'>
            <div className='browse__header-text'>
              <h2 className='header--xxlarge with-metadata'>Briefs</h2>
              <p className='header__descriptions'>Briefs, including general custom briefs, commodity summaries and country summaries, highlight results, findings and messages from a variety of projects that relied on the IMPACT model (and other associated models). You can explore the Briefs and filter them by type, commodity, geographical location, tag, and project name.</p>
            </div>
          </div>
        </header>
        <section className='section__padding'>
          <div className='row'>
            <BrowseFilters
              dispatch={this.props.dispatch}
              articleFilters={this.props.articleFilters}
              type='brief'
              mobileFiltersOpen={this.props.mobileFiltersOpen}
            />
            <BrowseList
              dispatch={this.props.dispatch}
              articles={this.props.articles}
              articleFilters={this.props.articleFilters}
              articleSorting={this.props.articleSorting}
              articlePage={this.props.articlePage}
              path={this.props.route.path}
            />
          </div>
        </section>
      </section>
    )
  }
}

// Set default props
BriefBrowse.propTypes = {
  dispatch: React.PropTypes.func,
  articles: React.PropTypes.array,
  articleFilters: React.PropTypes.array,
  articleSorting: React.PropTypes.oneOf(['recency', 'relevance']),
  articlePage: React.PropTypes.number,
  route: React.PropTypes.object,
  mobileFiltersOpen: React.PropTypes.bool
}

// /////////////////////////////////////////////////////////////////// //
// Connect functions

const mapStateToProps = (state) => {
  return {
    // connect brief article type as articles
    articles: state.article.briefs,
    articleFilters: state.article.articleFilters,
    articleSorting: state.article.articleSorting,
    articlePage: state.article.articlePage,
    mobileFiltersOpen: state.article.mobileFiltersOpen
  }
}

export default connect(mapStateToProps)(BriefBrowse)
