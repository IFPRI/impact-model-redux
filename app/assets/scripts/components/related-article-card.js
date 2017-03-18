'use strict'
import React from 'react'
import { Link } from 'react-router'

// Utils
import { cutAtWord, toTitleCase } from '../utils/format'

export class RelatedArticleCard extends React.Component {
  goToTag (tag, e) {
    e.preventDefault()
    this.props.updateArticleFilters([tag])
    this.props.router.push(`/${this.props.type}s`)
  }

  render () {
    const { article, cardType } = this.props
    const tags = article.tags || []

    return (
      <li className={`article-card--${cardType}`}>
        <header className={`article-card__header--${cardType}`}>
          <h5 className='header--small'>
            <Link className='link__underline--dark' to={`/${article.type}s/${article.id}`}>{article.title}</Link>
          </h5>
        </header>
        <div className={`article-card__body--${cardType}`}>
          <p>{`${cutAtWord(article.preview, 190)}...`}</p>
        </div>
        <ul className='article-card__tags'>
          {tags.map(tag => {
            return <li key={tag}><a onClick={this.goToTag.bind(this, tag)} href=''>{toTitleCase(tag)}</a></li>
          })}
        </ul>
      </li>
    )
  }
}

// Set default props
RelatedArticleCard.propTypes = {
  article: React.PropTypes.object,
  cardType: React.PropTypes.string,
  type: React.PropTypes.string,
  router: React.PropTypes.object,
  updateArticleFilters: React.PropTypes.func
}

export default RelatedArticleCard
