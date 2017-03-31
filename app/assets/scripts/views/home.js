'use strict'
import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

// Actions
import { updateArticleFilters } from '../actions'

// Components
import RelatedArticles from '../components/related-articles'
import FeaturedProjects from '../components/featured-projects'

// Data
import filterCategories from '../../data/filter-categories'

export class Home extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.updateArticleFilters = this.updateArticleFilters.bind(this)
  }

  updateArticleFilters (filters) {
    this.props.dispatch(updateArticleFilters(filters))
  }

  render () {
    const { selectedProject, briefs, router, dispatch } = this.props
    return (
      <section className='page__home'>
        <header className='home__header'>
          <div className='row row--shortened'>
            <h2 className='header--xxxlarge'>Answering Questions About Our World’s Food Supply</h2>
            <p className='header__descriptions'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet ligula aliquam. Lorem ipsum dolor sit amet, consectetur elit.</p>
            <Link className='button button--outline' to={'/about'}>Learn More</Link>
            <Link className='button button--outline' to={'/briefs'}>View Briefs</Link>
          </div>
        </header>
        <FeaturedProjects
          projects={filterCategories.projects.slice(0, 2)}
          updateArticleFilters={this.updateArticleFilters}
          router={router}
          dispatch={dispatch}
          selectedProject={selectedProject}
          />
        <RelatedArticles
          title='Recently Added Briefs'
          cardType='related'
          type='brief'
          // all briefs within a project, sorted by date
          articles={briefs.filter(b => (selectedProject) ? b.project === selectedProject : true).sort((a, b) => b.date - a.date).slice(0, 3)}
          updateArticleFilters={this.updateArticleFilters}
          router={router}
          >
          <Link className='button button--main button--more-information' to={'/briefs'}>View All Briefs</Link>
        </RelatedArticles>
      </section>
    )
  }
}

Home.propTypes = {
  briefs: React.PropTypes.array,
  dispatch: React.PropTypes.func,
  router: React.PropTypes.object,
  selectedProject: React.PropTypes.string
}

const mapStateToProps = (state) => {
  return {
    briefs: state.article.briefs,
    scenarios: state.article.scenarios,
    projects: state.articles,
    selectedProject: state.home.selectedProject
  }
}
export default connect(mapStateToProps)(Home)
