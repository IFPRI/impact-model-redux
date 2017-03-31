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
        <section className='section--project-briefs section--blue'>
          <div className='row'>
            <FeaturedProjects
              projects={filterCategories.projects.slice(0, 2)}
              updateArticleFilters={this.updateArticleFilters}
              router={router}
              dispatch={dispatch}
              selectedProject={selectedProject}
              />
            <div className='split--right'>
              <RelatedArticles
                title='Recently Added Briefs'
                cardType='related-frontpage'
                type='brief'
                // all briefs within a project, sorted by date
                articles={briefs.filter(b => (selectedProject) ? b.project === selectedProject : true).sort((a, b) => b.date - a.date).slice(0, 3)}
                updateArticleFilters={this.updateArticleFilters}
                router={router}
                >
                <Link className='button button--outline button--more-information' to={'/briefs'}>View All Briefs</Link>
              </RelatedArticles>
            </div>
          </div>
        </section>
        <section className='section__internal section__padding'>
          <div className='row'>
            <header className='header-internal'>
              <h3 className='header--xlarge with-description'>How to Get More Information</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et dui gravida, posuere diam id, congue augue. Pellentesque nec purus ex.</p>
            </header>
            <ul>
              <li className='card--large'>
                <h4 className='header--large'>Download the IMPACT Data</h4>
                <p>Get access to the data we use to run each of our models.</p>
                <Link className='button button--main' to={'/about'}>Learn More</Link>
              </li>
              <li className='card--large'>
                <h4 className='header--large'>Contact Us</h4>
                <p>Want more custom analysis? Reach out to us with your needs and we’ll get back to you as soon as we can. </p>
                <Link className='button button--main' to={'/about'}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </section>
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
