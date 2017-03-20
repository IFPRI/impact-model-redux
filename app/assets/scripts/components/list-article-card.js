'use strict'
import React from 'react'
import moment from 'moment'
import { Link } from 'react-router'
import c from 'classnames'

// Utils
import { commaSeparate, cutAtWord } from '../utils/format'
import { translate } from '../utils/translation'

export class ListArticleCard extends React.Component {

  toDictionaryDefintionArray (array) {
    return array && array.length
      ? <dd>{array.length > 1 ? commaSeparate(array.map((a) => translate(a))) : translate(array[0])}</dd>
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
          CardMeta = <dl><dt>{commodities.length > 1 ? 'Main Commodities' : 'Main Commodity'}:</dt>{Commodities}</dl>
          break
        case 'commodity-summary':
          CardMeta = <dl><dt>Main Location{locations.length > 1 ? 's' : ''}:</dt>{Locations}</dl>
          break
      }
    }

    return (
      <Link className='link-card' to={`/${this.props.path}/${article.id}`}>
        <div className={c('article-list-card', type === 'scenario' ? type : briefType)}>
          <div className='article-list-card__header'>
            <h4 className='header--small with-metadata'>{article.title}</h4>
            <span className='metadata-italic'>{(type === 'brief' ? `${translate(briefType)}   |   ` : '') + date}</span>
            <p className='article-list-card__body'>{`${cutAtWord(article.preview, 190)}...`}</p>
          </div>
          <div className='article-list-card__meta'>
            {CardMeta}
          </div>
        </div>
      </Link>
    )
  }
}

// Set default props
ListArticleCard.propTypes = {
  article: React.PropTypes.object,
  path: React.PropTypes.string
}

export default ListArticleCard
