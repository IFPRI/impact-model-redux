'use strict'
import React from 'react'
import moment from 'moment'
import { Link } from 'react-router'

import { cutAtWord } from '../utils/format'

const RelatedArticleCard = React.createClass({
  displayName: 'RelatedArticleCard',

  propTypes: {
    article: React.PropTypes.object
  },

  render: function () {
    const article = this.props.article
    let date = moment(article.date, 'MM/DD/YYYY').format('MMMM D, YYYY')
    return (
      <div className='article-card'>
        <header className='article-card__header'>
          <h4>
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
          </h4>
          <ul>
            <li>{date}</li>
            <li><Link to={`${article.author}`}>{article.author}</Link></li>
          </ul>
        </header>
        <div className='article-card__body'>
          <p>{`${cutAtWord(article.preview, 190)}...`}</p>
        </div>
    </div>
    )
  }
})

// /////////////////////////////////////////////////////////////////// //
// Connect functions

export default RelatedArticleCard
