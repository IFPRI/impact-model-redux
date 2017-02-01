'use strict'
import React from 'react'

// Components
import RelatedArticleCard from './related-article-card'

const RelatedArticles = React.createClass({
  displayName: 'RelatedArticles',

  propTypes: {
    relatedArticles: React.PropTypes.array
  },

  render: function () {
    let articles = this.props.relatedArticles
    articles = articles
      ? articles.map((article, i) => {
        return <RelatedArticleCard article={article} key={`related-article-${i}`} />
      })
      : ''
    return (
      <div className='page__related-articles-list'>
        <h3>Related Articles</h3>
        {articles}
      </div>
    )
  }
})

// /////////////////////////////////////////////////////////////////// //
// Connect functions

export default RelatedArticles
