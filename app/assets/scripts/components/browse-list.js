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

  handleSortingUpdate (evt) {
    const e = evt.target
    this.props.dispatch(updateArticleSorting(e.options[e.selectedIndex].value))
  }

  render () {
    const {articles, articleSorting, path} = this.props
    return (
      <div className='browse__article-list'>
        <header className='article-list__header'>
          <h2>Results <span className='result-count'>({articles.length})</span></h2>
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
      </div>
    )
  }
}

// Set default props
BrowseList.propTypes = {
  dispatch: React.PropTypes.func,
  articles: React.PropTypes.array,
  articleSorting: React.PropTypes.string,
  path: React.PropTypes.string
}

export default BrowseList
