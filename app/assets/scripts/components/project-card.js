'use strict'
import React from 'react'

import projectDescriptions from '../../data/projects.json'
import { translate } from '../utils/translation'
import RelatedArticleCardHome from './related-article-card-home'

class ProjectCard extends React.Component {

  goToScenarios (project, e) {
    e.preventDefault()
    e.stopPropagation()
    this.props.updateArticleFilters([project])
    this.props.router.push(`/scenarios`)
  }

  goToBriefs (project, e) {
    e.preventDefault()
    e.stopPropagation()
    this.props.updateArticleFilters([project])
    this.props.router.push(`/briefs`)
  }

  render () {
    const { project, briefs, router } = this.props
    const relatedArticles = briefs.filter(b => b.project === project).sort((a, b) => b.date - a.date).slice(0, 1)

    return (
      <li className='featured-project'>
        <ul className='related-articles'>
          {relatedArticles.map(article => {
            return <RelatedArticleCardHome
              cardType='related-frontpage'
              type='brief'
              article={article}
              key={article.id}
              updateArticleFilters={this.updateArticleFilters}
              router={router}
              project={project}
            />
          })}
        </ul>
      </li>
    )
  }
}

// Set default props
ProjectCard.propTypes = {
  project: React.PropTypes.string,
  router: React.PropTypes.object,
  updateArticleFilters: React.PropTypes.func,
  briefs: React.PropTypes.array
}

export default ProjectCard
