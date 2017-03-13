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
import Loading from '../components/loading'

export class Scenario extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.metadata = props.articles.find((article) => article.id === props.params.id)
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

  render () {
    const articleMetadata = this.metadata
    const articles = this.props.articles
    const date = moment(articleMetadata.date, 'M/D/YYYY').format('MMMM Do, YYYY')
    return (
      <section className='page__article'>
        <section className='header__internal'>
          <div className='row row--shortened'>
            <div className='home__header-split--left split__internal--left'>
              <div className='home__header-split--left__content'>
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
Scenario.propTypes = {
  dispatch: React.PropTypes.func,
  articles: React.PropTypes.array,
  fetchArticle: React.PropTypes.func,
  articleLoading: React.PropTypes.bool,
  article: React.PropTypes.string,
  charts: React.PropTypes.object,
  params: React.PropTypes.object
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
