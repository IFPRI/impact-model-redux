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

export class Brief extends React.Component {
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
      <div className='page__article'>
        <section className='header__internal'>
          <div className='row'>
            <div className='home__header-split--left split__internal--left'>
              <div className='home__header-split--left__content'>
                <h2 className='header--xxlarge'>{articleMetadata.title}</h2>
                <ul className='article-byline'>
                  <li>{date}</li>
                  <li>{articleMetadata.author}</li>
                </ul>
              </div>
            </div>
            <div className='home__header-split--right'>
              <Link to={'/'} className='button button--outline'>Download Report</Link>
              <Link to={'/'} className='button button--outline'>Share</Link>
            </div>
          </div>
        </section>
        {this.props.articleLoading
         ? <Loading />
         : <section>
             <div className='row'>
               <div dangerouslySetInnerHTML={{__html: this.props.article}}></div>
             </div>
           </section>
        }
        <ProjectArticles articleMetadata={articleMetadata} articles={articles} />
        <RelatedArticles articleMetadata={articleMetadata} articles={articles} />
      </div>
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
  params: React.PropTypes.object
}

// /////////////////////////////////////////////////////////////////// //
// Connect functions

const mapStateToProps = (state) => {
  return {
    articles: state.article.briefs,
    articleLoading: state.article.articleLoading,
    article: state.article.article,
    charts: state.article.charts
  }
}
export default connect(mapStateToProps)(Brief)
