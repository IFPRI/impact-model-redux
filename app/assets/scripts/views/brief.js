'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router'
import _ from 'lodash'

// Actions
import { fetchArticle } from '../actions'

// Components
import ProjectArticles from '../components/project-articles'
import RelatedArticles from '../components/related-articles'
import Chart from '../components/chart'
import Map from '../components/map'
import Loading from '../components/loading'

// Utils
import { translate } from '../utils/translation'

export class Brief extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.metadata = props.articles.find((article) => article.id === props.params.id)
    props.dispatch(fetchArticle(this.metadata.url))
  }

  componentDidUpdate () {
    this.addCharts(this.props.charts)
    this.addMaps(this.props.maps)
  }

  addCharts (charts) {
    _.forEach(charts, (data, name) => {
      const placeholder = document.querySelector('.' + name)
      if (placeholder) {
        ReactDOM.render(<Chart name={name} data={data} />, placeholder)
      }
    })
  }

  addMaps (maps) {
    _.forEach(maps, (data, name) => {
      const placeholder = document.querySelector('.' + name)
      if (placeholder) {
        ReactDOM.render(<Map name={name} data={data} />, placeholder)
      }
    })
  }

  render () {
    const articleMetadata = this.metadata
    const articles = this.props.articles
    const date = moment(articleMetadata.date, 'M/D/YYYY').format('MMMM Do, YYYY')

    let locations = articleMetadata.locations
    locations = locations
      ? locations.length > 1 ? locations.map((loc) => <li>{translate(loc)}</li>) : <li>{translate(locations)}</li>
      : ''

    let resources = articleMetadata.resources
    resources = resources
      ? resources.length > 1 ? resources.map((res) => <li><a target="_blank" href={res}>{res}</a></li>) : <li><a target="_blank" href={resources}>{resources}</a></li>
      : ''

    return (
      <section className='page__article'>
        <section className='header__internal'>
          <div className='row row--shortened'>
            <div className='home__header-split--left split__internal--left'>
              <div className='home__header-split--left__content'>
                <span className='header--type'>{translate(articleMetadata.briefType)}</span>
                <h2 className='header--xxlarge with-metadata'>{articleMetadata.title}</h2>
                <dl className='article-byline header__metadata'>
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
                <div className='article-metadata__item'>
                  <span className='article-metadata__header'>Locations:</span>
                  <ul>{locations}</ul>
                </div>
                <div className='article-metadata__item'>
                  <span className='article-metadata__header'>Resources:</span>
                  <ul>{resources}</ul>
                </div>
               </div>
               <div className='article--content' dangerouslySetInnerHTML={{__html: this.props.article}}></div>
             </div>
           </section>
        }
        <ProjectArticles articleMetadata={articleMetadata} articles={articles} />
        <RelatedArticles articleMetadata={articleMetadata} articles={articles} />
      </section>
    )
  }
}

// Set default props
Brief.propTypes = {
  dispatch: React.PropTypes.func,
  articles: React.PropTypes.array,
  fetchArticle: React.PropTypes.func,
  articleLoading: React.PropTypes.bool,
  article: React.PropTypes.string,
  charts: React.PropTypes.object,
  maps: React.PropTypes.object,
  params: React.PropTypes.object
}

// /////////////////////////////////////////////////////////////////// //
// Connect functions

const mapStateToProps = (state) => {
  return {
    articles: state.article.briefs,
    articleLoading: state.article.articleLoading,
    article: state.article.article,
    charts: state.article.charts,
    maps: state.article.maps
  }
}
export default connect(mapStateToProps)(Brief)
