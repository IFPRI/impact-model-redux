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
      <div className='article-card--project'>
        <h5 className='header--small'><Link to={`/${article.type}s/${article.id}`} className='article-card__link--project'>{article.title}</Link></h5>
        <span className='metadata-italic'>{date}</span>
        <p className='article-card__body--project'>{`${cutAtWord(article.preview, 190)}...`}</p>
      </div>
    )
  }
}

// Set default props
ProjectArticleCard.propTypes = {
  article: React.PropTypes.object
}

export default ProjectArticleCard
