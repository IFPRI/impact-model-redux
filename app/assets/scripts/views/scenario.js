'use strict'
import React from 'react'
import { connect } from 'react-redux'
import marked from 'marked'
import fm from 'front-matter'
import { Link } from 'react-router'

// Utils
import { loadText } from '../utils/load-text.js'

// Components
import ProjectArticles from '../components/project-articles'
import RelatedArticles from '../components/related-articles'

class Scenario extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      articleBody: '',
      articleMetadata: {}
    }
    // Before component mount
    let articleId = (props.location.pathname).split('/')
    articleId = articleId[articleId.length - 1].split('?')[0]
    const metadata = props.articles.find((article) => article.id === articleId)
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
      <div className='article'>
        <section className='header__internal'>
          <div className='header-split--left'>
            <h2 className='header--xlarge'>{this.state.articleMetadata.title}</h2>
            <span>date</span>
          </div>
          <div className='header-split--right'>
            <Link to={'/'} className='button button--outline'>Download Report</Link>
            <Link to={'/'} className='button button--outline'>Share</Link>
          </div>
        </section>
        <section>
          <div className='row'>
            <div dangerouslySetInnerHTML={{__html: this.state.articleBody}}></div>
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
  articles: React.PropTypes.array,
  location: React.PropTypes.object
}

// /////////////////////////////////////////////////////////////////// //
// Connect functions

const mapStateToProps = (state) => {
  return {
    articles: state.article.scenarios
  }
}

module.exports = connect(mapStateToProps)(Scenario)
