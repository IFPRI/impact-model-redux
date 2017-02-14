'use strict'
import React from 'react'
import moment from 'moment'
import { Link } from 'react-router'

// Utils
import { commaSeparate, cutAtWord } from '../utils/format'
import { translate } from '../utils/translation'

class ListArticleCard extends React.Component {
  render () {
    const article = this.props.article
    const date = moment(article.date, 'MM/DD/YYYY').format('MMMM D, YYYY')
    let locations = article.locations
    locations = locations
      ? <dt><b>Location{locations.length > 1 ? 's' : ''}: </b>
      {locations.length > 1 ? commaSeparate(locations.map((loc) => translate(loc))) : translate(locations)}</dt>
      : ''

    return (
      <div className='article-list-card'>
        <header className='article-list-card__header'>
          <div className='article-list-card__title'>
            <h4><Link to={`/${this.props.path}/${article.id}`}>{article.title}</Link></h4>
            <span>{date}</span>
          </div>
          <div className='article-list-card__meta'>
            <dl>
              <dt><b>Author:</b> <Link to={`${article.author}`}>{article.author}</Link></dt>
              {locations}
            </dl>
          </div>
        </header>
        <div className='article-list-card__body'>
          <p>{`${cutAtWord(article.preview, 190)}...`}</p>
        </div>
    </div>
    )
  }
}

// Set default props
ListArticleCard.propTypes = {
  article: React.PropTypes.object,
  path: React.PropTypes.string
}

export default ListArticleCard
