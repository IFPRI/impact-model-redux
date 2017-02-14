'use strict'
import React from 'react'
import moment from 'moment'
import { Link } from 'react-router'

// Utils
import { cutAtWord } from '../utils/format'

class ProjectArticleCard extends React.Component {
  render () {
    const article = this.props.article
    const date = moment(article.date, 'MM/DD/YYYY').format('MMMM D, YYYY')
    return (
      <div className='article-card--project'>
        <header className='article-card__header--project'>
          <h4>
            <Link to={`/${article.type}s/${article.id}`}>{article.title}</Link>
          </h4>
          <ul>
            <li>{date}</li>
            <li><Link to={`${article.author}`}>{article.author}</Link></li>
          </ul>
        </header>
        <div className='article-card__body--project'>
          <p>{`${cutAtWord(article.preview, 190)}...`}</p>
        </div>
    </div>
    )
  }
}

// Set default props
ProjectArticleCard.propTypes = {
  article: React.PropTypes.object
}

export default ProjectArticleCard
