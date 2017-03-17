'use strict'
import React from 'react'
import moment from 'moment'
import { Link } from 'react-router'
import c from 'classnames'

// Utils
import { commaSeparate, cutAtWord } from '../utils/format'
import { translate } from '../utils/translation'

export class ListArticleCard extends React.Component {
  render () {
    const article = this.props.article
    const { locations, commodities, tags, briefType, type } = article
    const date = moment(article.date, 'MM/DD/YYYY').format('MMMM D, YYYY')

    const Locations = locations
      ? <dd>{locations.length > 1 ? commaSeparate(locations.map((loc) => translate(loc))) : translate(locations[0])}</dd>
      : ''

    const Commodities = commodities
      ? <dd>{commodities.length > 1 ? commaSeparate(commodities.map((com) => translate(com))) : translate(commodities[0])}</dd>
      : ''

    const Tags = tags
      ? <dd>{tags.length > 1 ? commaSeparate(tags.map((com) => translate(com))) : translate(tags[0])}</dd>
      : ''

    let CardMeta = ''
    if (type === 'scenario') {
      CardMeta = <dl><dt>{tags.length > 1 ? 'Tags' : 'Tag'}:</dt>{Tags}</dl>
    } else if (type === 'brief') {
      switch (briefType) {
        case 'custom':
          CardMeta = (
            <dl>
              <dt>Location{locations.length > 1 ? 's' : ''}:</dt>
              {Locations}
              <dt>{commodities.length > 1 ? 'Commodities' : 'Commodity'}:</dt>
              {Commodities}
            </dl>
          )
          break
        case 'country-summary':
          CardMeta = <dl><dt>{commodities.length > 1 ? 'Main Commodities' : 'Main Commodity'}:</dt>{Commodities}</dl>
          break
        case 'commodity-summary':
          CardMeta = <dl><dt>Main Location{locations.length > 1 ? 's' : ''}:</dt>{Locations}</dl>
          break
      }
    }

    return (
      <div className={c('article-list-card', type === 'scenario' ? type : briefType)}>
        <div className='article-list-card__header'>
          <h4 className='header--small with-description'><Link to={`/${this.props.path}/${article.id}`}>{article.title}</Link></h4>
          <span className='metadata-italic'>{date}</span>
          <p className='article-list-card__body'>{`${cutAtWord(article.preview, 190)}...`}</p>
        </div>
        <div className='article-list-card__meta'>
          {CardMeta}
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
