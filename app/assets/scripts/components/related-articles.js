'use strict'
import React from 'react'

// Components
import RelatedArticleCard from './related-article-card'

export class RelatedArticles extends React.Component {
  render () {
    let { articles } = this.props
    articles = articles || []

    return (
      <section className='page__related-articles-list section__padding'>
        <div className='row'>
          <h4 className='header--large section__header'>Related Articles</h4>
          <ul>
            {articles.map(article => <RelatedArticleCard article={article} key={`related-article-${article.id}`} />)}
          </ul>
        </div>
      </section>
    )
  }
}

// Set default props
RelatedArticles.propTypes = {
  articles: React.PropTypes.array
}

export default RelatedArticles
