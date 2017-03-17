'use strict'
import React from 'react'

// Utils
import { findRelatedArticles } from '../utils/related.js'

// Components
import RelatedArticleCard from './related-article-card'

export class RelatedArticles extends React.Component {
  render () {
    const articleMetadata = this.props.articleMetadata
    let articles = findRelatedArticles(articleMetadata, this.props.articles, 3)
    articles = articles
      ? articles.map((article, i) => {
        return <RelatedArticleCard
          article={article}
          key={`related-article-${i}`}
          router={this.props.router}
          updateArticleFilters={this.props.updateArticleFilters}
          />
      })
      : ''
    return (
      <section className='page__related-articles-list section__padding'>
        <div className='row'>
          <h4 className='header--large section__header'>Related Articles</h4>
          <ul>
            {articles}
          </ul>
        </div>
      </section>
    )
  }
}

// Set default props
RelatedArticles.propTypes = {
  type: React.PropTypes.string,
  articleMetadata: React.PropTypes.object,
  articles: React.PropTypes.array,
  router: React.PropTypes.object,
  updateArticleFilters: React.PropTypes.func
}

export default RelatedArticles
