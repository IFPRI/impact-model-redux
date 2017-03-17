'use strict'
import React from 'react'
import { connect } from 'react-redux'

// Components
import BrowseFilters from '../components/browse-filters.js'
import BrowseList from '../components/browse-list.js'

export class ScenarioBrowse extends React.Component {
  render () {
    return (
      <section className='page__browse'>
        <header className='header__internal'>
          <div className='row'>
            <div className='browse__header-text'>
              <h2 className='header--xxlarge with-metadata'>Scenarios</h2>
              <p className='header__descriptions'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut augue aliquet ligula aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut augue aliquet ligula aliquam.</p>
            </div>
          </div>
        </header>
        <section>
          <div className='row'>
            <BrowseFilters
              dispatch={this.props.dispatch}
              articleFilters={this.props.articleFilters}
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
ScenarioBrowse.propTypes = {
  dispatch: React.PropTypes.func,
  articles: React.PropTypes.array,
  articleFilters: React.PropTypes.array,
  articleSorting: React.PropTypes.oneOf(['recency', 'relevance']),
  articlePage: React.PropTypes.number,
  route: React.PropTypes.object
}

// /////////////////////////////////////////////////////////////////// //
// Connect functions

const mapStateToProps = (state) => {
  return {
    // connect scenario article type as articles
    articles: state.article.scenarios,
    articleFilters: state.article.articleFilters,
    articleSorting: state.article.articleSorting,
    articlePage: state.article.articlePage
  }
}

export default connect(mapStateToProps)(ScenarioBrowse)
