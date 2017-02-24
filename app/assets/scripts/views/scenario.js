'use strict'
import React from 'react'
import { connect } from 'react-redux'
import marked from 'marked'
import fm from 'front-matter'

// Utils
import { loadText } from '../utils/load-text.js'

// Components
import ProjectArticles from '../components/project-articles'
import RelatedArticles from '../components/related-articles'

class ScenarioBrowse extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      articleBody: '',
      articleMetadata: {}
    }
    // Before component mount
    let articleId = (this.props.location.pathname).split('/')
    articleId = articleId[articleId.length - 1].split('?')[0]
    const metadata = this.props.articles.find((article) => article.id === articleId)
    loadText(metadata.url).then((text) => {
      const body = marked(fm(text).body)
      this.setState({
        articleMetadata: metadata,
        articleBody: body
      })
    })
  }

  render () {
    const articleMetadata = this.state.articleMetadata
    const articles = this.props.articles
    return (
      <section className='article'>
        <header className='article__header'>
          <h1>{this.state.articleMetadata.title}</h1>
        </header>
        <div className='page__article-body'>
          <div dangerouslySetInnerHTML={{__html: this.state.articleBody}}></div>
        </div>
        <ProjectArticles articleMetadata={articleMetadata} articles={articles} />
        <RelatedArticles articleMetadata={articleMetadata} articles={articles} />
      </section>
    )
  }
}

// Set default props
ScenarioBrowse.propTypes = {
  articles: React.PropTypes.array,
  location: React.PropTypes.object
}

// /////////////////////////////////////////////////////////////////// //
// Connect functions

const mapStateToProps = (state) => {
  return {
    articles: state.article.articles
  }
}

module.exports = connect(mapStateToProps)(ScenarioBrowse)
