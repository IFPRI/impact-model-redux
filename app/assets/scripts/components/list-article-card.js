'use strict'
import React from 'react'
import moment from 'moment'
import { Link } from 'react-router'

import { cutAtWord } from '../utils/format'

const ListArticleCard = React.createClass({
  propTypes: {
    article: React.PropTypes.object
  },

  render: function () {
    const article = this.props.article
    const date = moment(article.date, 'MM/DD/YYYY').format('MMMM D, YYYY')
    return (
      <div className='article-card--list'>
        <header className='article-card__header--list'>
          <h4>
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
          </h4>
          <ul>
            <li>{date}</li>
            <li><Link to={`${article.author}`}>{article.author}</Link></li>
          </ul>
        </header>
        <div className='article-card__body--list'>
          <p>{`${cutAtWord(article.preview, 190)}...`}</p>
        </div>
    </div>
    )
  }
})

export default ListArticleCard
