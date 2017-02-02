'use strict'
import React from 'react'
import moment from 'moment'
import { Link } from 'react-router'

import { commaSeparate, cutAtWord } from '../utils/format'

const ListArticleCard = React.createClass({
  propTypes: {
    article: React.PropTypes.object
  },

  render: function () {
    const article = this.props.article
    const date = moment(article.date, 'MM/DD/YYYY').format('MMMM D, YYYY')
    const locations = article.locations
    return (
      <div className='article-card--list'>
        <header className='article-card__header--list'>
          <div className="header--list__title">
            <h4><Link to={`/articles/${article.id}`}>{article.title}</Link></h4>
          </div>
          <div>
            <span>{date}</span>
          </div>
          <dl>
            <dt>Author: <Link to={`${article.author}`}>{article.author}</Link></dt>
            <dt>{
              `Location${locations.length > 1 ? 's' : ''}:
              ${locations.length > 1 ? commaSeparate(locations) : locations}`
            }</dt>
          </dl>
        </header>
        <div className='article-card__body--list'>
          <p>{`${cutAtWord(article.preview, 190)}...`}</p>
        </div>
    </div>
    )
  }
})

export default ListArticleCard
