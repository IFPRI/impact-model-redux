'use strict'
import React from 'react'
import { Link } from 'react-router'

// Utils
import { cutAtWord, commaSeparate, toTitleCase } from '../utils/format'

export class RelatedArticleCard extends React.Component {
  render () {
    const { article, cardType } = this.props
    return (
      <li className={`article-card--${cardType}`}>
        <header className={`article-card__header--${cardType}`}>
          <h5 className='header--small'>
            <Link to={`/${article.type}s/${article.id}`}>{article.title}</Link>
          </h5>
        </header>
        <div className={`article-card__body--${cardType}`}>
          <p>{`${cutAtWord(article.preview, 190)}...`}</p>
        </div>
        <span className='article-card__tags'>{toTitleCase(commaSeparate(article.tags))}</span>
      </li>
    )
  }
}

// Set default props
RelatedArticleCard.propTypes = {
  article: React.PropTypes.object,
  cardType: React.PropTypes.string
}

export default RelatedArticleCard
