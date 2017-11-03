'use strict'
import React from 'react'
import { Link } from 'react-router'
import moment from 'moment'

// Utils
import projectDescriptions from '../../data/projects.json'
import { cutAtWord } from '../utils/format'
import { translate } from '../utils/translation'

export class RelatedArticleCardHome extends React.Component {
  goToTag (tag, e) {
    e.preventDefault()
    this.props.updateArticleFilters([tag])
    this.props.router.push(`/${this.props.type}s`)
  }

  render () {
    const { project, article, cardType } = this.props
    const tags = article.tags || []
    const date = moment(article.date, 'MM/DD/YYYY').format('MMMM D, YYYY')
    const briefType = article.briefType

    return (
      <li className={`article-card--${cardType}`}>
        <Link className={`article-card--${cardType}--link`} to={`/${article.type}s/${article.id}`}>
          <div className='article-card__header--wrapper'>
            <header className={`article-card__header--${cardType}`}>
              <span className='header--type'>{`${translate(briefType)}`}</span>
              <h5 className='header--medium'>{article.title}</h5>
              <div className='card__metadata'>
                <span className='metadata-italic'>{`${date}`}</span>
              </div>
            </header>
            <div className={`article-card__body--${cardType}`}>
              {(briefType === 'custom') ? <p>{`${cutAtWord(article.preview, 190)}`}</p> : ''}
            </div>
          </div>
          <div className='article-card__footer--wrapper'>
            <div>
              <h6>Project</h6>
              <span>{translate(project)}</span>
            </div>
            <div className='link-block'>
              <h6>Tags</h6>
              <ul className='article-card__tags'>
                {tags.map(tag => {
                  return <li key={tag}>{translate(tag)}</li>
                })}
              </ul>
            </div>
          </div>
        </Link>
      </li>
    )
  }
}

// Set default props
RelatedArticleCardHome.propTypes = {
  project: React.PropTypes.string,
  article: React.PropTypes.object,
  cardType: React.PropTypes.string,
  type: React.PropTypes.string,
  router: React.PropTypes.object,
  updateArticleFilters: React.PropTypes.func
}

export default RelatedArticleCardHome
