'use strict'
import React from 'react'

import { findProjectArticles } from '../utils/related.js'

// Components
import ProjectArticleCard from './project-article-card'

const ProjectArticles = React.createClass({
  displayName: 'ProjectArticles',

  propTypes: {
    articleMetadata: React.PropTypes.object,
    articles: React.PropTypes.object
  },

  render: function () {
    const articleMetadata = this.props.articleMetadata
    const project = articleMetadata.project
    let articles = findProjectArticles(articleMetadata, this.props.articles, project, 2)
    articles = articles
      ? articles.map((article, i) => {
        return <ProjectArticleCard article={article} key={`project-article-${i}`} />
      })
      : ''
    return (
      <div className='page__project-articles-list'>
        <h3>Other Articles in {project}</h3>
        {articles}
      </div>
    )
  }
})

// /////////////////////////////////////////////////////////////////// //
// Connect functions

export default ProjectArticles
