'use strict'
import React from 'react'
import { connect } from 'react-redux'

// Components
import ArticleHeader from '../components/article-header'
import ProjectArticles from '../components/project-articles'
import RelatedArticles from '../components/related-articles'

var Home = React.createClass({
  displayName: 'Home',

  propTypes: {
  },

  render: function () {
    return (
      <div className='article'>
        <ArticleHeader />
        <div className='page__article-body'>
          <h4>
            This is an article heading
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
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
