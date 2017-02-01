'use strict'
import React from 'react'
import { connect } from 'react-redux'
import marked from 'marked'
import fm from 'front-matter'

import { loadText } from '../utils/load-text.js'

// Components
import ArticleHeader from '../components/article-header'
import ProjectArticles from '../components/project-articles'
import RelatedArticles from '../components/related-articles'

var Article = React.createClass({
  propTypes: {
    projects: React.PropTypes.object,
    project: React.PropTypes.string
  },

  getInitialState: function () {
    return {
      projectBody: '',
      projectMetadata: {}
    }
  },

  componentWillMount: function () {
    let renderer = new marked.Renderer()
    renderer.heading = (text, level) => {
      const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-')
      // Change h1 to h5, h2 and above to h6
      level = level <= 2 ? level + 4 : 6
      return `<h${level}>${escapedText}</h${level}>`
    }
    const metadata = this.props.projects[this.props.project]
    loadText(metadata.url).then((text) => {
      const body = marked(fm(text).body, {renderer: renderer})
      this.setState({
        projectMetadata: metadata,
        projectBody: body
      })
    })
  },

  render: function () {
    const articleMetadata = this.state.projectMetadata
    const articles = this.props.projects
    return (
      <div className='article'>
        <ArticleHeader />
        <div className='page__article-body'>
          <h4>
            {this.state.projectMetadata.title}
          </h4>
          <div dangerouslySetInnerHTML={{__html: this.state.projectBody}}></div>
        </div>
        <ProjectArticles articleMetadata={articleMetadata} articles={articles} />
        <RelatedArticles articleMetadata={articleMetadata} articles={articles} />
      </div>
    )
  }
})

// /////////////////////////////////////////////////////////////////// //
// Connect functions

function mapStateToProps (state) {
  return {
    projects: state.project.projects,
    project: state.project.project
  }
}

module.exports = connect(mapStateToProps)(Article)
