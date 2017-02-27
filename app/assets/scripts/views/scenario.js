'use strict'
import React from 'react'
import { connect } from 'react-redux'
import marked from 'marked'
import fm from 'front-matter'
import moment from 'moment'
import { Link } from 'react-router'

// Actions
import { updateArticleLoading, updateArticle } from '../actions'

// Utils
import { loadArticle } from '../utils/load-text.js'

// Components
import ProjectArticles from '../components/project-articles'
import RelatedArticles from '../components/related-articles'
import Loading from '../components/loading'

export class Scenario extends React.Component {
  constructor (props, context) {
    super(props, context)
    props.dispatch(updateArticleLoading(true))
    this.metadata = props.articles.find((article) => article.id === props.params.id)
    loadArticle(this.metadata.url).then((text) => {
      const body = marked(fm(text).body)
      props.dispatch(updateArticle(body))
      props.dispatch(updateArticleLoading(false))
    })
  }

  render () {
    if (this.props.articleLoading) {
      return <Loading />
    }
    console.log(this.props)
    const articleMetadata = this.metadata
    const articles = this.props.articles
    const date = moment(articleMetadata.date, 'M/D/YYYY').format('MMMM Do, YYYY')
    return (
      <div className='article'>
        <section className='header__internal'>
          <div className='header-split--left'>
            <h2 className='header--xlarge'>{articleMetadata.title}</h2>
            <ul className='article-byline'>
              <li>{date}</li>
              <li>{articleMetadata.author}</li>
            </ul>
          </div>
          <div className='header-split--right'>
            <Link to={'/'} className='button button--outline'>Download Report</Link>
            <Link to={'/'} className='button button--outline'>Share</Link>
          </div>
        </section>
        <section>
          <div className='row'>
            <div dangerouslySetInnerHTML={{__html: this.props.article}}></div>
          </div>
        </section>
        <ProjectArticles articleMetadata={articleMetadata} articles={articles} />
        <RelatedArticles articleMetadata={articleMetadata} articles={articles} />
      </div>
    )
  }
}

// Set default props
Scenario.propTypes = {
  dispatch: React.PropTypes.func,
  articles: React.PropTypes.array,
  articleLoading: React.PropTypes.bool,
  article: React.PropTypes.string,
  params: React.PropTypes.object
}

// /////////////////////////////////////////////////////////////////// //
// Connect functions

const mapStateToProps = (state) => {
  return {
    articles: state.article.scenarios,
    articleLoading: state.article.articleLoading,
    article: state.article.article
  }
}

export default connect(mapStateToProps)(Scenario)
