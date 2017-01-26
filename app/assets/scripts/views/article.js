'use strict'
import React from 'react'
import { connect } from 'react-redux'
import marked from 'marked'

import { loadText } from '../utils/load-text.js'

// Components
import ArticleHeader from '../components/article-header'
import ProjectArticles from '../components/project-articles'
import RelatedArticles from '../components/related-articles'

var Home = React.createClass({
  displayName: 'Home',

  propTypes: {
  },

  getInitialState: function () {
    return {
      articleText: '',
      testUrl: '/assets/data/projects/global-futures.md'
    }
  },

  componentWillMount: function () {
    loadText(this.state.testUrl).then((text) => {
      this.setState({articleText: marked(text)})
    })
  },

  render: function () {
    return (
      <div className='article'>
        <ArticleHeader />
        <div className='page__article-body'>
          <h4>
            This is an article heading
          </h4>
          <div dangerouslySetInnerHTML={{__html: this.state.articleText}}></div>
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
  }
}

module.exports = connect(mapStateToProps)(Home)
