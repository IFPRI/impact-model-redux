'use strict'
import React from 'react'

// Components
import ListArticleCard from './list-article-card.js'

const BrowseList = React.createClass({
  propTypes: {
    articles: React.PropTypes.array
  },

  render: function () {
    const articles = this.props.articles
    return (
      <div className='browse__article-list'>
        <header className='article-list__header'>
          <h2>Results <span className='result-count'>({articles.length})</span></h2>
        </header>
        {articles.map((article, i) => {
          return (
            <ListArticleCard
              article={article}
              key={'list-article-card' + i}
            />
          )
        })}
      </div>
    )
  }
})

export default BrowseList
