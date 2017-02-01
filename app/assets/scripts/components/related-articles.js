'use strict'
import React from 'react'

import { findRelatedArticles } from '../utils/related.js'

// Components
import RelatedArticleCard from './related-article-card'

const RelatedArticles = React.createClass({
  displayName: 'RelatedArticles',

  propTypes: {
    articleMetadata: React.PropTypes.object,
    articles: React.PropTypes.object
  },

  render: function () {
    const articleMetadata = this.props.articleMetadata
    let articles = findRelatedArticles(articleMetadata, this.props.articles, 3)
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
