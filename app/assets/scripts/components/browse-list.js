'use strict'
import React from 'react'
import classnames from 'classnames'
import _ from 'lodash'

// Actions
import { updateArticleFilters, updateArticleSorting, updateArticlePage } from '../actions'

// Components
import ListArticleCard from './list-article-card.js'

// Constants
import { articleBrowsePageLength } from '../constants.js'

class BrowseList extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.articles = this.sortArticles(props.articles, props.articleSorting)
    this.articles = this.displayArticles = this.filterArticles(this.articles, props.articleFilters)
    this.articleCount = this.articles.length
    this.displayArticles = this.displayArticles.slice(articleBrowsePageLength * this.props.articlePage, articleBrowsePageLength * this.props.articlePage + articleBrowsePageLength)

    this.handleSortingUpdate = this.handleSortingUpdate.bind(this)
    this.incrementPage = this.incrementPage.bind(this)
    this.decrementPage = this.decrementPage.bind(this)
  }

  componentWillUnmount () {
    this.props.dispatch(updateArticleFilters([]))
    this.props.dispatch(updateArticleSorting('recency'))
  }

  componentWillReceiveProps (nextProps) {
    let articles = this.articles

    this.sortArticles(articles, nextProps.articleSorting)
    articles = this.filterArticles(articles, nextProps.articleFilters)

    if (nextProps.articleFilters !== this.props.articleFilters) {
      this.articleCount = articles.length
      if (this.props.articlePage !== 0) {
        this.goToPage(0)
      }
    }

    this.displayArticles = articles.slice(articleBrowsePageLength * nextProps.articlePage, articleBrowsePageLength * nextProps.articlePage + articleBrowsePageLength)
  }

  incrementPage () {
    const { articlePage } = this.props
    this.goToPage(articlePage * articleBrowsePageLength + articleBrowsePageLength - 1 < this.articleCount ? articlePage + 1 : articlePage)
  }

  decrementPage () {
    const { articlePage } = this.props
    this.goToPage(articlePage > 0 ? articlePage - 1 : 0)
  }

  goToPage (page) {
    this.props.dispatch(updateArticlePage(page))
  }

  handleSortingUpdate (event) {
    this.props.dispatch(updateArticleSorting(event.target.value))
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
    const {articlePage, articleSorting, path} = this.props
    const lowArticle = articleBrowsePageLength * articlePage + 1
    const highArticle = Math.min(this.articleCount, articleBrowsePageLength * articlePage + articleBrowsePageLength + 1)

    return (
      <section className='browse__article-list'>
        <header className='article-list__header'>
          <h5>Results <span className='result-count'>({this.articleCount})</span></h5>
          <select onChange={this.handleSortingUpdate} className='article-list__sort-menu' selected={articleSorting}>
            <option value='recency'>Recent Updates</option>
            <option value='relevance'>Relevance</option>
          </select>
        </header>
        {this.displayArticles.map((article, i) => {
          return (
            <ListArticleCard
              article={article}
              path={path}
              key={'list-article-card' + i}
            />
          )
        })}
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
BrowseList.propTypes = {
  dispatch: React.PropTypes.func,
  articles: React.PropTypes.array,
  articleFilters: React.PropTypes.array,
  articleSorting: React.PropTypes.oneOf(['recency', 'relevance']),
  articlePage: React.PropTypes.number,
  path: React.PropTypes.string
}

export default BrowseList
