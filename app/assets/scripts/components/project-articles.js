'use strict'
import React from 'react'

// Utils
import { findProjectArticles } from '../utils/related.js'

// Components
import ProjectArticleCard from './project-article-card'

export class ProjectArticles extends React.Component {
  render () {
    const articleMetadata = this.props.articleMetadata
    const project = articleMetadata.project
    let articles = findProjectArticles(articleMetadata, this.props.articles, project, 2)
    articles = articles
      ? articles.map((article, i) => {
        return <ProjectArticleCard article={article} key={`project-article-${i}`} />
      })
      : ''
    return (
      <section className='page__project-articles-list section__padding '>
        <div className='row'>
          <h4 className='header--large section__header'>Other Articles in {project}</h4>
          {articles}
        </div>
      </section>
    )
  }
}

// Set default props
ProjectArticles.propTypes = {
  articleMetadata: React.PropTypes.object,
  articles: React.PropTypes.array
}

export default ProjectArticles
