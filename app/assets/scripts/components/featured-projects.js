'use strict'
import React from 'react'

// Components
import ProjectCard from './project-card'

class FeaturedProjects extends React.Component {
  render () {
    let { projects, router, updateArticleFilters, briefs } = this.props
    projects = projects || []

    return (
      <div className='section__internal section__padding'>
        <div className='split-content'>
          <header className='header-internal'>
            <h3 className='header--xlarge with-description'>Featured Briefs</h3>
            <p className='internal__descriptions'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et dui gravida, posuere diam id, congue augue. Pellentesque nec purus ex.</p>
          </header>
          <div className='content-internal'>
            <ul ref={(node) => (this.ul = node)}>
              {projects.map(project => {
                return (
                  <ProjectCard
                    project={project}
                    key={project}
                    router={router}
                    briefs={briefs}
                    updateArticleFilters={updateArticleFilters}
                    />
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

// Set default props
FeaturedProjects.propTypes = {
  projects: React.PropTypes.array,
  router: React.PropTypes.object,
  updateArticleFilters: React.PropTypes.func,
  briefs: React.PropTypes.array
}

export default FeaturedProjects
