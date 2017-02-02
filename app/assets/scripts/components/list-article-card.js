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
      <div className='article-list-card'>
        <header className='article-list-card__header'>
          <div className='article-list-card__title'>
            <h4><Link to={`/articles/${article.id}`}>{article.title}</Link></h4>
            <span>{date}</span>
          </div>
          <div className='article-list-card__meta'>
            <dl>
              <dt><b>Author:</b> <Link to={`${article.author}`}>{article.author}</Link></dt>
              <dt><b>Location{locations.length > 1 ? 's' : ''}:</b> {locations.length > 1 ? commaSeparate(locations) : locations}
              </dt>
            </dl>
          </div>
        </header>
        <div className='article-list-card__body'>
          <p>{`${cutAtWord(article.preview, 190)}...`}</p>
        </div>
    </div>
    )
  }
})

export default ListArticleCard
