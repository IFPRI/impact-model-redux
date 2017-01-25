'use strict'
import React from 'react'

const ArticleHeader = React.createClass({
  displayName: 'ArticleHeader',

  render: function () {
    return (
      <div className='article__header'>
        <h1>Article Title</h1>
      </div>
    )
  }
})

// /////////////////////////////////////////////////////////////////// //
// Connect functions

export default ArticleHeader
