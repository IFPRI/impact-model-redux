'use strict'
import React from 'react'
import moment from 'moment'
import { Link } from 'react-router'

// Utils
import { cutAtWord } from '../utils/format'

export class ProjectArticleCard extends React.Component {
  render () {
    const article = this.props.article
    const date = moment(article.date, 'MM/DD/YYYY').format('MMMM D, YYYY')
    return (
      <Link to={`/${article.type}s/${article.id}`} className='article-card__link--project'>
        <div className='article-card--project'>
          <h4>{article.title}</h4>
          <span className='metadata-italic'>{date}</span>
          <p className='article-card__body--project'>{`${cutAtWord(article.preview, 190)}...`}</p>
        </div>
      </Link>
    )
  }
}

// Set default props
ProjectArticleCard.propTypes = {
  article: React.PropTypes.object
}

export default ProjectArticleCard
