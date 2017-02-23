'use strict'
import React from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import _ from 'lodash'

// Actions
import { updateArticleFilters, updateArticleSorting, updateArticlePage } from '../actions'

// Components
import BrowseFilters from '../components/browse-filters.js'
import BrowseList from '../components/browse-list.js'

// Constants
import { articleBrowsePageLength } from '../constants.js'

class ScenarioBrowse extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.articles = this.sortArticles(props.articles.filter((article) => article.type === 'scenario'), props.articleSorting)
    this.articles = this.displayArticles = this.filterArticles(this.articles, props.articleFilters)
    this.articleCount = this.articles.length
    this.displayArticles = this.displayArticles.slice(articleBrowsePageLength * this.props.articlePage, articleBrowsePageLength * this.props.articlePage + articleBrowsePageLength)

    this.incrementPage = this.incrementPage.bind(this)
    this.decrementPage = this.decrementPage.bind(this)
  }

  componentWillUnmount () {
    this.props.dispatch(updateArticleFilters([]))
    this.props.dispatch(updateArticleSorting('recency'))
  }

  componentWillReceiveProps (nextProps) {
    let articles = this.articles

    if (nextProps.articleSorting !== this.props.articleSorting || nextProps.articlePage !== this.props.articlePage) {
      articles = this.sortArticles(articles, nextProps.articleSorting)
      articles = this.filterArticles(articles, nextProps.articleFilters)
    }

    if (nextProps.articleFilters !== this.props.articleFilters) {
      articles = this.filterArticles(articles, nextProps.articleFilters)
      this.articleCount = articles.length

      if (this.props.articlePage !== 0) {
        this.goToPage(0)
      }
    }

    this.displayArticles = articles.slice(articleBrowsePageLength * nextProps.articlePage, articleBrowsePageLength * nextProps.articlePage + articleBrowsePageLength)
  }

  incrementPage () {
    let { articlePage } = this.props
    articlePage = articlePage * articleBrowsePageLength + articleBrowsePageLength - 1 < this.articleCount ? articlePage + 1 : articlePage
    this.props.dispatch(updateArticlePage(articlePage))
  }

  decrementPage () {
    let { articlePage } = this.props
    articlePage = articlePage > 0 ? articlePage - 1 : 0
    this.props.dispatch(updateArticlePage(articlePage))
  }

  goToPage (page) {
    this.props.dispatch(updateArticlePage(page))
  }

  sortArticles (articles, articleSorting) {
    switch (articleSorting) {
      case 'recency':
        return articles.sort((a, b) => new Date(b.date) - new Date(a.date))
      case 'relevance':
        return articles.sort((a, b) => b.matches - a.matches)
    }
    return articles
  }

  filterArticles (articles, articleFilters) {
    if (articleFilters.length) {
      return articles.filter((article) => {
        const metadata = _.concat(article.commodities, article.locations, article.project).filter((item) => item)
        const matches = _.intersection(metadata, articleFilters).length
        article.matches = matches
        return matches
      })
    }
    return articles
  }

  render () {
    const { articlePage } = this.props
    const lowArticle = articleBrowsePageLength * articlePage + 1
    let highArticle = articleBrowsePageLength * articlePage + articleBrowsePageLength + 1
    highArticle = highArticle < this.articleCount ? highArticle : this.articleCount

    return (
      <section className='page__browse'>
        <header className='header__internal'>
          <div className='row'>
            <div className='browse__header-text'>
              <h2 className='header--xlarge'>Scenarios</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut augue aliquet ligula aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut augue aliquet ligula aliquam.</p>
            </div>
          </div>
        </header>
        <BrowseFilters
          dispatch={this.props.dispatch}
          articleFilters={this.props.articleFilters}
        />
        <BrowseList
          dispatch={this.props.dispatch}
          articles={this.displayArticles}
          articleSorting={this.props.articleSorting}
          articleCount= {this.articleCount}
          path={this.props.route.path}
        />
        <nav className='browse__pagination'>
          <button
            className={classnames('browse__pagination-button', 'browse__pagination-button--back', 'collecticon-chevron-left', {'pagination-button--disabled': articlePage === 0})}
            onClick={this.decrementPage}>
          </button>
          <span className='browse__pagination-status'>Article {lowArticle} - {highArticle} of {this.articleCount}</span>
          <button
            className={classnames('browse__pagination-button', 'browse__pagination-button--forward', 'collecticon-chevron-right', {'pagination-button--disabled': highArticle === this.articleCount})}
            onClick={this.incrementPage}>
          </button>
        </nav>
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
    articles: state.article.articles,
    articleFilters: state.article.articleFilters,
    articleSorting: state.article.articleSorting,
    articlePage: state.article.articlePage
  }
}

module.exports = connect(mapStateToProps)(ScenarioBrowse)
