'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router'
import _ from 'lodash'

// Actions
import { fetchArticle, updateArticleFilters } from '../actions'

// Components
import RelatedArticles from '../components/related-articles'
import Chart from '../components/chart'
import Loading from '../components/loading'

// Utils
import { translate } from '../utils/translation'
import { findRelatedArticles, findProjectArticles } from '../utils/related'

export class Scenario extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.metadata = props.articles.find((article) => article.id === props.params.id)
    this.updateArticleFilters = this.updateArticleFilters.bind(this)
    props.dispatch(fetchArticle(this.metadata.url))
  }

  componentDidUpdate () {
    this.addCharts()
  }

  addCharts () {
    _.forEach(this.props.charts, (data, name) => {
      const placeholder = document.querySelector('.' + name)
      if (placeholder) {
        ReactDOM.render(<Chart name={name} data={data} />, placeholder)
      }
    })
  }

  updateArticleFilters (filters) {
    this.props.dispatch(updateArticleFilters(filters))
  }

  render () {
    const articleMetadata = this.metadata
    const articles = this.props.articles
    const date = moment(articleMetadata.date, 'M/D/YYYY').format('MMMM Do, YYYY')

    let locations = articleMetadata.locations
    locations = locations
      ? locations.length > 1 ? locations.map((loc) => <li key={loc}>{translate(loc)}</li>) : <li>{translate(locations)}</li>
      : ''

    let resources = articleMetadata.resources
    resources = resources
      ? resources.length > 1 ? resources.map((res) => <li key={res}><a target="_blank" href={res}>{res}</a></li>) : <li><a target="_blank" href={resources}>{resources}</a></li>
      : ''

    return (
      <section className='page__article'>
        <section className='header__internal'>
          <div className='row row--shortened'>
            <div className='home__header-split--left split__internal--left'>
              <div className='home__header-split--left__content'>
                <h2 className='header--xxlarge with-metadata'>{articleMetadata.title}</h2>
                <dl className='article-byline header__metadata header__descriptions'>
                  <dt className='visually-hidden'>Date</dt>
                  <dd>{date}</dd>
                  <dt className='visually-hidden'>Author</dt>
                  <dd>{articleMetadata.author}</dd>
                </dl>
              </div>
            </div>
            <div className='home__header-split--right'>
              <Link to={'/'} className='button button--outline button--download'>Download Report</Link>
              <Link to={'/'} className='button button--outline'>Share</Link>
            </div>
          </div>
        </section>
        {this.props.articleLoading
         ? <Loading />
         : <section className='section__internal'>
             <div className='row row--shortened'>
               <div className='article-metadata'>
                 Locations:
                 <ul>{locations}</ul>
                 Resources:
                 <ul>{resources}</ul>
               </div>
               <div className='article--content' dangerouslySetInnerHTML={{__html: this.props.article}}></div>
             </div>
           </section>
        }
        <RelatedArticles
          type='project'
          cardType='project'
          title={`Other Articles in ${articleMetadata.project}`}
          articles={findProjectArticles(articleMetadata, articles, articleMetadata.project, 2)}
          />
        <RelatedArticles
          type='scenario'
          cardType='related'
          articles={findRelatedArticles(articleMetadata, articles, 3)}
          router={this.props.router}
          updateArticleFilters={this.updateArticleFilters}
          />
      </section>
    )
  }
}

// Set default props
Scenario.propTypes = {
  dispatch: React.PropTypes.func,
  articles: React.PropTypes.array,
  fetchArticle: React.PropTypes.func,
  articleLoading: React.PropTypes.bool,
  article: React.PropTypes.string,
  charts: React.PropTypes.object,
  params: React.PropTypes.object,
  router: React.PropTypes.object
}

// /////////////////////////////////////////////////////////////////// //
// Connect functions

const mapStateToProps = (state) => {
  return {
    articles: state.article.scenarios,
    articleLoading: state.article.articleLoading,
    article: state.article.article,
    charts: state.article.charts
  }
}
export default connect(mapStateToProps)(Scenario)
