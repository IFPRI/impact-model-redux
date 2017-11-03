'use strict'
import React from 'react'
import c from 'classnames'

import projectDescriptions from '../../data/projects.json'
import { translate } from '../utils/translation'

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

  updateSelectedProjectWrapper (e) {
    this.props.updateSelectedProject(this.props.project, e.currentTarget.offsetTop)
  }

  render () {
    const { project, selected } = this.props

    return (
      <li className='featured-project' onClick={this.updateSelectedProjectWrapper.bind(this)}>
        <div className='featured-project__item--body'>
          <h4 className='header--large with-metadata'>{translate(project)} Project</h4>
          <p>{projectDescriptions[project] || ''}</p>

        </div>
        <ul className='related-articles'>
          <li className='article-card--related-frontpage'>
            <header className='article-card__header--related-frontpage'>
              <h5 className='header--small with-metadata'><a className='link__underline--dark' href="#/briefs/south-korea-krei">South Korea - KREI</a></h5>
              <div className='card__metadata'>
                <span className='metadata-italic'>Custom Brief</span>
                <span className='metadata-italic'>July 24, 2017</span>
              </div>
            </header>
            <div className='article-card__body--related-frontpage'>
              <p>What is on this brief and how to interpret the results## This Brief shows standard country level results for South Korea, originating from the IMPACT baseline suite of scenarios Source...</p>
            </div>
            <ul className='article-card__tags link-block'>
              <li><a className='link__underline' href="">Rice</a></li>
              <li><a className='link__underline' href="">Cereals</a></li>
              <li><a className='link__underline' href="">Eastern Asia</a></li>
            </ul>
          </li>
          <li className='article-card--related-frontpage'>
            <header className='article-card__header--related-frontpage'>
              <h5 className='header--small with-metadata'><a className='link__underline--dark' href="#/briefs/south-korea-krei">South Korea - KREI</a></h5>
              <div className='card__metadata'>
                <span className='metadata-italic'>Custom Brief</span>
                <span className='metadata-italic'>July 24, 2017</span>
              </div>
            </header>
            <div className='article-card__body--related-frontpage'>
              <p>What is on this brief and how to interpret the results## This Brief shows standard country level results for South Korea, originating from the IMPACT baseline suite of scenarios Source...</p>
            </div>
            <ul className='article-card__tags link-block'>
              <li><a className='link__underline' href="">Rice</a></li>
              <li><a className='link__underline' href="">Cereals</a></li>
              <li><a className='link__underline' href="">Eastern Asia</a></li>
            </ul>
          </li>
        </ul>
      </li>
    )
  }
}

// Set default props
ProjectCard.propTypes = {
  project: React.PropTypes.string,
  router: React.PropTypes.object,
  updateSelectedProject: React.PropTypes.func,
  updateArticleFilters: React.PropTypes.func,
  selected: React.PropTypes.bool
}

export default ProjectCard
