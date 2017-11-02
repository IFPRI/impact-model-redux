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
      <li onClick={this.updateSelectedProjectWrapper.bind(this)}>
        <div className='featured-project__item--body'>
          <h4 className='header--large'>Project: {translate(project)}</h4>
          <p>{projectDescriptions[project] || ''}</p>

        </div>
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
