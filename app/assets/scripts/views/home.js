'use strict'
import React from 'react'
import { connect } from 'react-redux'

var Home = React.createClass({
  propTypes: {
  },

  render: function () {
    return (
      <div>
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
