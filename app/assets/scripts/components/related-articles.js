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
          <h4 className='header--large section__header'>{this.props.title || 'Related Articles'}</h4>
          <ul>
            {articles.map(article => <RelatedArticleCard article={article} key={`related-article-${article.id}`} />)}
          </ul>
          {this.props.children}
        </div>
      </section>
    )
  }
}

// Set default props
RelatedArticles.propTypes = {
  articles: React.PropTypes.array,
  title: React.PropTypes.string,
  children: React.PropTypes.node
}

export default RelatedArticles
