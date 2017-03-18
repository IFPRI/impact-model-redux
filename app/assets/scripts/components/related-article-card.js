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
    const article = this.props.article
    const tags = article.tags || []
    return (
      <li className='article-card--related'>
        <header className='article-card__header--related'>
          <h5 className='header--small'>
            <Link className='link__underline--dark' to={`/${article.type}s/${article.id}`}>{article.title}</Link>
          </h5>
        </header>
        <div className='article-card__body--related'>
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
  type: React.PropTypes.string,
  article: React.PropTypes.object,
  router: React.PropTypes.object,
  updateArticleFilters: React.PropTypes.func
}

export default RelatedArticleCard
