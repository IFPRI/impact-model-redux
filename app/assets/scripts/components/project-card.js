'use strict'
import React from 'react'
import c from 'classnames'

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

  render () {
    const { project, onClick, selected } = this.props

    return (
      <li onClick={onClick} className={c('featured-project__item featured-project__item--settings', { selected })}>
        <div className='featured-project__item--body'>
          <h4 className='header--large'>{translate(project)}</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a molestie sapien. Sed ac nunc vel risus luctus suscipit ut ut dolor. Etiam sit amet elit volutpat, tempus nisl non, sem. Etiam sit amet elit volutpat, tempus nisl non…</p>
          <a href="" className='link-block link__underline' onClick={this.goToScenarios.bind(this, project)}>View All Related Scenarios</a>
          <a href="" className='link-block link__underline' onClick={this.goToBriefs.bind(this, project)}>View All Related Briefs</a>
        </div>
      </li>
    )
  }
}

// Set default props
ProjectCard.propTypes = {
  project: React.PropTypes.string,
  router: React.PropTypes.object,
  onClick: React.PropTypes.func,
  updateArticleFilters: React.PropTypes.func,
  selected: React.PropTypes.bool
}

export default ProjectCard
