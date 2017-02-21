'use strict'
import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

// Components
import BrowseFilters from '../components/browse-filters.js'
import BrowseList from '../components/browse-list.js'

class ScenarioBrowse extends React.Component {
  constructor (props, context) {
    super(props, context)
    let articles = this.sortArticles(props.articles.filter((article) => article.type === 'scenarios'), props.articleSorting)
    articles = this.filterArticles(props.articles, props.articleFilters)
    this.state = {
      articles: articles
    }
  }

  componentWillReceiveProps (nextProps) {
    let articles = this.props.articles
    if (nextProps.articleSorting !== this.props.articleSorting) {
      articles = this.filterArticles(articles, nextProps.articleFilters)
      articles = this.sortArticles(articles, nextProps.articleSorting)
    }
    if (nextProps.articleFilters !== this.props.articleFilters) {
      articles = this.sortArticles(articles, nextProps.articleSorting)
      articles = this.filterArticles(articles, nextProps.articleFilters)
    }
    this.setState({
      articles: articles
    })
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
        <BrowseFilters
          dispatch={this.props.dispatch}
          articleFilters={this.props.articleFilters}
        />
        <BrowseList
          dispatch={this.props.dispatch}
          articles={this.state.articles}
          articleSorting={this.props.articleSorting}
          path={this.props.route.path}
        />
      </div>
    )
  }
}

// Set default props
ScenarioBrowse.propTypes = {
  dispatch: React.PropTypes.func,
  articles: React.PropTypes.array,
  articleFilters: React.PropTypes.array,
  articleSorting: React.PropTypes.string,
  route: React.PropTypes.object
}

// /////////////////////////////////////////////////////////////////// //
// Connect functions

const mapStateToProps = (state) => {
  return {
    articles: state.article.articles,
    articleFilters: state.article.articleFilters,
    articleSorting: state.article.articleSorting
  }
}

module.exports = connect(mapStateToProps)(ScenarioBrowse)
