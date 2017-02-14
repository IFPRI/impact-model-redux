'use strict'
import React from 'react'

// Utils
import { findRelatedArticles } from '../utils/related.js'

// Components
import RelatedArticleCard from './related-article-card'

class RelatedArticles extends React.Component {
  render () {
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
}

// Set default props
RelatedArticles.propTypes = {
  articleMetadata: React.PropTypes.object,
  articles: React.PropTypes.array
}

export default RelatedArticles
