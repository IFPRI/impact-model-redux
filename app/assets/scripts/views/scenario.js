'use strict'
import React from 'react'
import { connect } from 'react-redux'
import marked from 'marked'
import fm from 'front-matter'
import { Link } from 'react-router'

// Actions
import { updateArticleLoading, updateArticle } from '../actions'

// Utils
import { parsePath, loadArticle } from '../utils/load-text.js'

// Components
import ProjectArticles from '../components/project-articles'
import RelatedArticles from '../components/related-articles'
import Loading from '../components/loading'

class Scenario extends React.Component {
  constructor (props, context) {
    super(props, context)
    props.dispatch(updateArticleLoading(true))
    const articleId = parsePath(props.location.pathname)
    this.metadata = props.articles.find((article) => article.id === articleId)
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
    const articleMetadata = this.metadata
    const articles = this.props.articles
    return (
      <div className='article'>
        <section className='header__internal'>
          <div className='header-split--left'>
            <h2 className='header--xlarge'>{articleMetadata.title}</h2>
            <span>{articleMetadata.date}</span>
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
  location: React.PropTypes.object
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

module.exports = connect(mapStateToProps)(Scenario)
