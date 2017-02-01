'use strict'
import React from 'react'
import { Link } from 'react-router'

import { cutAtWord, commaSeparate, toTitleCase } from '../utils/format'

const RelatedArticleCard = React.createClass({
  displayName: 'RelatedArticleCard',

  propTypes: {
    article: React.PropTypes.object
  },

  render: function () {
    const article = this.props.article
    return (
      <div className='article-card--related'>
        <header className='article-card__header--related'>
          <h4>
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
          </h4>
        </header>
        <div className='article-card__body--related'>
          <p>{`${cutAtWord(article.preview, 190)}...`}</p>
          <p className='article-card__tags'>{toTitleCase(commaSeparate(article.tags))}</p>
        </div>
    </div>
    )
  }
})

// /////////////////////////////////////////////////////////////////// //
// Connect functions

export default RelatedArticleCard
