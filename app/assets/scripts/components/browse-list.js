'use strict'
import React from 'react'

// Components
import ListArticleCard from './list-article-card.js'

class BrowseList extends React.Component {
  render () {
    const {articles, path} = this.props
    return (
      <div className='browse__article-list'>
        <div className='article-list__header'>
          <h5>Results <span className='result-count'>({articles.length})</span></h5>
        </div>
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
  articles: React.PropTypes.array,
  path: React.PropTypes.string
}

export default BrowseList
