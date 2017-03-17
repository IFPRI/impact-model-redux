'use strict'
import React from 'react'
import c from 'classnames'

// Components
import RelatedArticleCard from './related-article-card'

export class RelatedArticles extends React.Component {
  render () {
    let { articles, cardType } = this.props
    articles = articles || []

    return (
      <section className={c((cardType === 'project' ? 'page__project-articles-list' : 'page__related-articles-list'), 'section__padding')}>
        <div className='row'>
          <h4 className='header--large section__header'>{this.props.title || 'Related Articles'}</h4>
          <ul>
            {articles.map(article => <RelatedArticleCard cardType={cardType} article={article} key={`article-${article.id}`} />)}
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
  cardType: React.PropTypes.string,
  children: React.PropTypes.node
}

export default RelatedArticles
