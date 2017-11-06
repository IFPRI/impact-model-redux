'use strict'
import React from 'react'
import moment from 'moment'
import { Link } from 'react-router'
import c from 'classnames'

// Utils
import { commaSeparate } from '../utils/format'
import { translate } from '../utils/translation'

export class ListArticleCard extends React.Component {

  toDictionaryDefintionArray (array) {
    return array && array.length
      ? <dd>{commaSeparate(array.map((a) => translate(a)))}</dd>
      : ''
  }

  render () {
    const article = this.props.article
    const { locations, commodities, tags, briefType, type } = article
    const date = moment(article.date, 'MM/DD/YYYY').format('MMMM D, YYYY')

    const Locations = this.toDictionaryDefintionArray(locations)
    const Commodities = this.toDictionaryDefintionArray(commodities)
    const Tags = this.toDictionaryDefintionArray(tags)

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
        case 'commodity-summary':
          if (tags) CardMeta = <dl><dt>Tag{tags.length > 1 ? 's' : ''}:</dt>{Tags}</dl>
          break
      }
    }

    return (
      <div className={c('article-list-card', type === 'scenario' ? type : briefType)}>
        <Link className='link-card' to={`/${this.props.path}/${article.id}`}>
          <div className='article-list-card__header'>
            <span className='header--type'>{(type === 'brief' ? `${translate(briefType)}  ` : '')}</span>
            <h4 className='header--small'>{article.title}</h4>
            <span className='metadata-italic'>{date}</span>
            {(briefType === 'custom') ? <p className='article-list-card__body'>{article.subtitle}</p> : ''}
          </div>
          <div className='article-list-card__meta'>
            {CardMeta}
          </div>
        </Link>
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
