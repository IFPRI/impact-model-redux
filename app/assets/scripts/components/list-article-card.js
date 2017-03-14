'use strict'
import React from 'react'
import moment from 'moment'
import { Link } from 'react-router'

// Utils
import { commaSeparate, cutAtWord } from '../utils/format'
import { translate } from '../utils/translation'

export class ListArticleCard extends React.Component {
  render () {
    const article = this.props.article
    const date = moment(article.date, 'MM/DD/YYYY').format('MMMM D, YYYY')
    let locations = article.locations
    locations = locations
      ? <dd>{locations.length > 1 ? commaSeparate(locations.map((loc) => translate(loc))) : translate(locations)}</dd>
      : ''

    let commodities = article.commodities
    commodities = commodities
      ? <dd>{commodities.length > 1 ? commaSeparate(commodities.map((com) => translate(com))) : translate(commodities)}</dd>
      : ''

    return (
      <div className='article-list-card'>
        <div className='article-list-card__header'>
          <h4 className='header--medium'><Link to={`/${this.props.path}/${article.id}`}>{article.title}</Link></h4>
          <span className='metadata-italic'>{date}</span>
          <p className='article-list-card__body'>{`${cutAtWord(article.preview, 190)}...`}</p>
        </div>
        <div className='article-list-card__meta'>
          <dl>
            <dt>Location{locations.length > 1 ? 's' : ''}:</dt>
            {locations}
            <dt>{commodities.length > 1 ? 'Commodity' : 'Commodities'}:</dt>
            {commodities}
          </dl>
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
