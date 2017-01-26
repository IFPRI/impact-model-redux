'use strict'
import React from 'react'
import { connect } from 'react-redux'
import jsyaml from 'js-yaml'
import marked from 'marked'

import { loadText } from '../utils/load-text.js'

// Components
import ArticleHeader from '../components/article-header'
import ProjectArticles from '../components/project-articles'
import RelatedArticles from '../components/related-articles'

var Article = React.createClass({
  displayName: 'Article',

  propTypes: {
    projects: React.PropTypes.array
  },

  getInitialState: function () {
    return {
      projectBody: '',
      projectMetadata: {},
      testUrl: '/assets/data/projects/global-futures.md'
    }
  },

  componentWillMount: function () {
    loadText(this.state.testUrl).then((text) => {
      const metadata = this.parseMetadata(text.split('---')[1])
      const body = this.parseBody(text.split('---')[2])
      console.log(metadata)
      this.setState({
        projectMetadata: metadata,
        projectBody: body
      })
    })
  },

  parseMetadata: function (metadata) {
    return jsyaml.load(metadata)
  },

  parseBody: function (body) {
    return marked(body)
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
    projects: state.projects.projects
  }
}

module.exports = connect(mapStateToProps)(Article)
