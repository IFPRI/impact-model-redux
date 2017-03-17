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
    return (
      <section className='page__home'>
        <header className='home__header'>
          <div className='row row--shortened'>
            <div className='home__header-split--left'>
              <div className='home__header-split--left__content'>
                <h2 className='header--xxxlarge'>Answering Questions About Our World’s Food Supply</h2>
                <p className='header__descriptions'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet ligula aliquam. Lorem ipsum dolor sit amet, consectetur elit.</p>
              </div>
            </div>
            <div className='home__header-split--right'>
              <Link className='button button--outline' to={'/about'}>Learn More</Link>
              <Link className='button button--outline' to={'/briefs'}>View Briefs</Link>
            </div>
          </div>
        </header>
        <FeaturedProjects
          projects={filterCategories.projects.slice(0, 2)}
          updateArticleFilters={this.updateArticleFilters}
          router={this.props.router}
          />
        <RelatedArticles title="Recently Added Briefs" cardType='related' articles={this.props.briefs.sort((a, b) => b.date - a.date).slice(0, 3)}>
          <Link className='button button--main button--more-information' to={'/briefs'}>View All Briefs</Link>
        </RelatedArticles>
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
