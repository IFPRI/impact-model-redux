'use strict'
import React from 'react'
import { connect } from 'react-redux'
import marked from 'marked'
import fm from 'front-matter'

import { loadText } from '../utils/load-text.js'

// Components
import ProjectArticles from '../components/project-articles'
import RelatedArticles from '../components/related-articles'

var Scenario = React.createClass({
  propTypes: {
    projects: React.PropTypes.array,
    project: React.PropTypes.string
  },

  getInitialState: function () {
    return {
      projectBody: '',
      projectMetadata: {}
    }
  },

  componentWillMount: function () {
    const metadata = this.props.projects.find((project) => project.id === this.props.project)
    loadText(metadata.url).then((text) => {
      const body = marked(fm(text).body)
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
        <header className='article__header'>
          <h1>{this.state.projectMetadata.title}</h1>
        </header>
        <div className='page__article-body'>
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

module.exports = connect(mapStateToProps)(Scenario)
