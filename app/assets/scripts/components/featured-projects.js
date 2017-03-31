'use strict'
import React from 'react'

import { updateSelectedProject } from '../actions'

// Components
import ProjectCard from './project-card'

class FeaturedProjects extends React.Component {
  render () {
    let { projects, selectedProject, router, dispatch, updateArticleFilters } = this.props
    projects = projects || []

    return (
      <section className='section__internal'>
        <div className='row row--shortened'>
          <header className='header-internal'>
            <h3 className='header--xlarge with-description'>Featured Projects</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et dui gravida, posuere diam id, congue augue. Pellentesque nec purus ex.</p>
          </header>
          <ul>
            {projects.map(project => {
              const selected = project === selectedProject
              return (
                <ProjectCard
                  project={project}
                  key={project}
                  router={router}
                  onClick={dispatch.bind(this, updateSelectedProject(project))}
                  updateArticleFilters={updateArticleFilters}
                  selected={selected}
                  />
              )
            })}
          </ul>
        </div>
      </section>
    )
  }
}

// Set default props
FeaturedProjects.propTypes = {
  projects: React.PropTypes.array,
  router: React.PropTypes.object,
  updateArticleFilters: React.PropTypes.func,
  dispatch: React.PropTypes.func,
  selectedProject: React.PropTypes.string
}

export default FeaturedProjects
