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

export class BrowseList extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.handleSortingUpdate = this.handleSortingUpdate.bind(this)
    this.incrementPage = this.incrementPage.bind(this)
    this.decrementPage = this.decrementPage.bind(this)
  }

  componentWillUnmount () {
    this.props.dispatch(updateArticleFilters([]))
    this.props.dispatch(updateArticleSorting('recency'))
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.articleFilters !== this.props.articleFilters && this.props.articlePage !== 0) {
      this.goToPage(0)
    }
  }

  incrementPage (page, articleCount) {
    this.goToPage(page * articleBrowsePageLength + articleBrowsePageLength - 1 < articleCount ? page + 1 : page)
  }

  decrementPage (page) {
    this.goToPage(Math.max(0, page - 1))
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
    const { articlePage, articleFilters, articleSorting, path } = this.props
    let articles = this.sortArticles(this.filterArticles(this.props.articles, articleFilters), articleSorting)
    const articleCount = articles.length
    articles = articles.slice(articleBrowsePageLength * articlePage, articleBrowsePageLength * articlePage + articleBrowsePageLength)

    const lowArticle = articleBrowsePageLength * articlePage + 1
    const highArticle = Math.min(articleCount, articleBrowsePageLength * articlePage + articleBrowsePageLength + 1)

    return (
      <section className='browse__article-list'>
        <header className='article-list__header'>
          <h5 className='header--small'>Results <span className='result-count'>({articleCount})</span></h5>
          <select onChange={this.handleSortingUpdate} className='article-list__sort-menu' selected={articleSorting}>
            <option value='recency'>Recent Updates</option>
            <option value='relevance'>Relevance</option>
          </select>
        </header>
        {articles.map((article, i) => {
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
            onClick={() => this.decrementPage(articlePage)}>
          </button>
          <span className='browse__pagination-status'>Article {lowArticle} - {highArticle} of {articleCount}</span>
          <button
            className={classnames('browse__pagination-button', 'browse__pagination-button--forward', 'collecticon-chevron-right', {'pagination-button--disabled': highArticle === articleCount})}
            onClick={() => this.incrementPage(articlePage, articleCount)}>
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
