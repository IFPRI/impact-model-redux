'use strict'
import React from 'react'
import { connect } from 'react-redux'
import marked from 'marked'

import { loadText } from '../utils/load-text.js'

// Components
import ArticleHeader from '../components/article-header'
import ProjectArticles from '../components/project-articles'
import RelatedArticles from '../components/related-articles'

var Article = React.createClass({
  displayName: 'Article',

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
    const metadata = this.props.projects[this.props.project]
    loadText(metadata.url).then((text) => {
      const body = marked(text.split('---')[2])
      this.setState({
        projectMetadata: metadata,
        projectBody: body
      })
    })
  },

  render: function () {
    return (
      <div className='article'>
        <ArticleHeader />
        <div className='page__article-body'>
          <h4>
            {this.state.projectMetadata.title}
          </h4>
          <div dangerouslySetInnerHTML={{__html: this.state.projectBody}}></div>
        </div>
        <ProjectArticles />
        <RelatedArticles />
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
