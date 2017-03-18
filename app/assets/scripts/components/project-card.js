'use strict'
import React from 'react'

import { translate } from '../utils/translation'

class ProjectCard extends React.Component {

  goToScenarios (project, e) {
    e.preventDefault()
    this.props.updateArticleFilters([project])
    this.props.router.push(`/scenarios`)
  }

  render () {
    const { project } = this.props

    return (
      <li className='featured-project__item featured-project__item--settings'>
        <div className='featured-project__item--body'>
          <h4 className='header--large'>{translate(project)}</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a molestie sapien. Sed ac nunc vel risus luctus suscipit ut ut dolor. Etiam sit amet elit volutpat, tempus nisl non, sem. Etiam sit amet elit volutpat, tempus nisl non…</p>
          <a href="" className='link-block' onClick={this.goToScenarios.bind(this, project)}>View All Related Scenarios</a>
        </div>
      </li>
    )
  }
}

// Set default props
ProjectCard.propTypes = {
  project: React.PropTypes.string,
  router: React.PropTypes.object,
  updateArticleFilters: React.PropTypes.func
}

export default ProjectCard
