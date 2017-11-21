'use strict'
import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

// Actions
import { updateArticleFilters } from '../actions'

// Components
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
    const { briefs, router, dispatch } = this.props
    return (
      <section className='page__home'>
        <header className='home__header'>
          <div className='row row--shortened'>
            <h2 className='header--xxxlarge'>Answering Questions About Our World’s Food Supply</h2>
            <p className='header__descriptions'>The International Model for Policy Analysis of Agricultural Commodities and Trade (IMPACT) provides a look into the policies and actions needed to feed the world, reduce poverty, and protect the natural resource base. Use the Briefs button below to learn how the model has been used to answer questions about different areas of agricultural development through 2050.</p>
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
              briefs={briefs}
              />
          </div>
        </section>
        <section className='section__internal section__padding section--grey'>
          <div className='row'>
            <header className='header-internal'>
              <h3 className='header--xlarge with-description'>How to Get More Information</h3>
              <p>Use the CONTACT US button to get in touch or to sign up for updates through Mailchimp. Use the ACCESS DATA button to access all the currently publicly-available data from IMPACT model simulations. Data are made available through the IFPRI Dataverse.</p>
            </header>
            <ul className='secondary--content'>
              <li className='card--large'>
                <h4 className='header--small'>Contact Us</h4>
                <p className='width--shortened'>Want more custom analysis? Reach out to us with your needs and we’ll get back to you soon. </p>
                <Link className='button button--main button--more-information--sm button--small' to={'/contact'}>Contact Us</Link>
              </li>
              <li className='card--large'>
                <h4 className='header--small'>Download the IMPACT Data</h4>
                <p className='width--shortened'>Get access to the data we use to run each of our models at our dataverse.</p>
                <a href='https://dataverse.harvard.edu/dataverse/impact' target='_blank' className='button button--main button--more-information--sm button--small'>Access Data</a>
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
  router: React.PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    briefs: state.article.briefs,
    scenarios: state.article.scenarios,
    projects: state.articles
  }
}
export default connect(mapStateToProps)(Home)
