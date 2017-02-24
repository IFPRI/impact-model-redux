'use strict'
import React from 'react'

// Actions
import { updateArticleSorting } from '../actions'

// Components
import ListArticleCard from './list-article-card.js'

class BrowseList extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.handleSortingUpdate = this.handleSortingUpdate.bind(this)
  }

  handleSortingUpdate (event) {
    this.props.dispatch(updateArticleSorting(event.target.value))
  }

  render () {
    const {articles, articleSorting, path} = this.props
    return (
      <section className='browse__article-list'>
        <header className='article-list__header'>
          <h5>Results <span className='result-count'>({this.props.articleCount})</span></h5>
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
      </section>
    )
  }
}

// Set default props
BrowseList.propTypes = {
  dispatch: React.PropTypes.func,
  articles: React.PropTypes.array,
  articleSorting: React.PropTypes.oneOf(['recency', 'relevance']),
  articleCount: React.PropTypes.number,
  path: React.PropTypes.string
}

export default BrowseList
