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
      <div>
        <div className='content-internal'>
          <h4 className='header--large section__header'>{this.props.title || 'Related Articles'}</h4>
          <ul className='related-articles'>
            {articles.map(article => {
              return (
                <RelatedArticleCard
                  type={this.props.type}
                  cardType={cardType}
                  article={article}
                  key={`article-${article.id}`}
                  router={this.props.router}
                  updateArticleFilters={this.props.updateArticleFilters}
                  />
              )
            })}
          </ul>
        </div>
        {this.props.children}
      </div>
    )
  }
}

// Set default props
RelatedArticles.propTypes = {
  articles: React.PropTypes.array,
  title: React.PropTypes.string,
  cardType: React.PropTypes.string,
  children: React.PropTypes.node,
  type: React.PropTypes.string,
  router: React.PropTypes.object,
  updateArticleFilters: React.PropTypes.func
}

export default RelatedArticles
