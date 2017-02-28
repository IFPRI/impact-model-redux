'use strict'
import React from 'react'
import { Link } from 'react-router'

// Utils
import { cutAtWord, commaSeparate, toTitleCase } from '../utils/format'

export class RelatedArticleCard extends React.Component {
  render () {
    const article = this.props.article
    return (
      <div className='article-card--related'>
        <header className='article-card__header--related'>
          <h4>
            <Link to={`/${article.type}s/${article.id}`}>{article.title}</Link>
          </h4>
        </header>
        <div className='article-card__body--related'>
          <p>{`${cutAtWord(article.preview, 190)}...`}</p>
          <p className='article-card__tags'>{toTitleCase(commaSeparate(article.tags))}</p>
        </div>
    </div>
    )
  }
}

// Set default props
RelatedArticleCard.propTypes = {
  article: React.PropTypes.object
}

export default RelatedArticleCard
