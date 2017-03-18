'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router'
import _ from 'lodash'
import md5 from 'browser-md5'

// Actions
import { fetchArticle, updateArticleFilters } from '../actions'

// Components
import RelatedArticles from '../components/related-articles'
import Chart from '../components/chart'
import Map from '../components/map'
import Loading from '../components/loading'

// Utils
import { translate } from '../utils/translation'
import { findRelatedArticles, findProjectArticles } from '../utils/related'

export class Brief extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.updateArticleFilters = this.updateArticleFilters.bind(this)
    props.dispatch(fetchArticle(this.props.metadata.url))
  }

  componentDidUpdate () {
    this.addCharts(this.props.charts)
    this.addMaps(this.props.maps)
  }

  addCharts (charts) {
    _.forEach(charts, (data, name) => {
      const placeholder = document.querySelector('.fig-' + md5(data.title).slice(0, 12))
      if (placeholder) {
        ReactDOM.render(<Chart name={name} data={data} />, placeholder)
      }
    })
  }

  addMaps (maps) {
    _.forEach(maps, (data, name) => {
      const placeholder = document.querySelector('.fig-' + md5(data.title).slice(0, 12))
      if (placeholder) {
        ReactDOM.render(<Map name={name} data={data} />, placeholder)
      }
    })
  }

  updateArticleFilters (filters) {
    this.props.dispatch(updateArticleFilters(filters))
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.params.id !== nextProps.params.id) {
      nextProps.dispatch(fetchArticle(nextProps.metadata.url))
    }
  }

  render () {
    const { articles, metadata } = this.props
    const date = moment(metadata.date, 'M/D/YYYY').format('MMMM Do, YYYY')

    let locations = metadata.locations
    locations = locations
      ? locations.length > 1 ? locations.map((loc) => <li key={loc}>{translate(loc)}</li>) : <li>{translate(locations)}</li>
      : ''

    let resources = metadata.resources
    resources = resources
      ? resources.length > 1 ? resources.map((res) => <li key={res}><a className='link__underline' target="_blank" href={res}>{res}</a></li>) : <li><a target="_blank" href={resources}>{resources}</a></li>
      : ''

    return (
      <section className='page__article'>
        <section className='header__internal'>
          <div className='row row--shortened'>
            <div className='home__header-split--left split__internal--left'>
              <div className='home__header-split--left__content'>
                <span className='header--type'>{translate(metadata.briefType)}</span>
                <h2 className='header--xxlarge with-metadata'>{metadata.title}</h2>
                <dl className='article-byline header__metadata header__descriptions'>
                  <dt className='visually-hidden'>Date</dt>
                  <dd>{date}</dd>
                  <dt className='visually-hidden'>Author</dt>
                  <dd>{metadata.author}</dd>
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
        <RelatedArticles
          type='project'
          cardType='project'
          title={`Other Briefs in ${translate(metadata.project)}`}
          articles={findProjectArticles(metadata, articles, metadata.project, 2)}
          router={this.props.router}
          updateArticleFilters={this.updateArticleFilters}
          />
        <RelatedArticles
          type='brief'
          cardType='related'
          articles={findRelatedArticles(metadata, articles, 3)}
          router={this.props.router}
          updateArticleFilters={this.updateArticleFilters}
          />
      </section>
    )
  }
}

Brief.propTypes = {
  dispatch: React.PropTypes.func,
  articles: React.PropTypes.array,
  fetchArticle: React.PropTypes.func,
  articleLoading: React.PropTypes.bool,
  article: React.PropTypes.string,
  charts: React.PropTypes.object,
  maps: React.PropTypes.object,
  params: React.PropTypes.object,
  router: React.PropTypes.object,
  metadata: React.PropTypes.object
}

const mapStateToProps = (state, props) => {
  return {
    metadata: state.article.briefs.find((article) => article.id === props.params.id),
    articles: state.article.briefs,
    articleLoading: state.article.articleLoading,
    article: state.article.article,
    charts: state.article.charts,
    maps: state.article.maps
  }
}
export default connect(mapStateToProps)(Brief)
