'use strict'
import React from 'react'

// Components
import ProjectCard from './project-card'

class FeaturedProjects extends React.Component {
  render () {
    let { projects } = this.props
    projects = projects || []

    return (
      <section className='section__internal'>
        <div className='row row--shortened'>
          <header className='header-internal'>
            <h3 className='header--xlarge with-description'>Featured Projects</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et dui gravida, posuere diam id, congue augue. Pellentesque nec purus ex.</p>
          </header>
          <ul>
            {projects.map(project => <ProjectCard project={project} key={project} router={this.props.router} updateArticleFilters={this.props.updateArticleFilters}/>)}
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
  updateArticleFilters: React.PropTypes.func
}

export default FeaturedProjects
