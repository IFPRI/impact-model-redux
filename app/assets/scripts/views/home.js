'use strict';
import React from 'react';
import { connect } from 'react-redux';

var Home = React.createClass({
  displayName: 'Home',

  propTypes: {
  },

  render: function () {
    return (
      <div className='header'>
        <h1><img src='/assets/graphics/layout/ds-logo-pos.svg' alt='Development Seed logotype' width='188' height='32' /></h1>
        <p>In the beginning the Universe was created.</p>
        <p>This has made a lot of people very angry and been widely regarded as a bad move.</p>
      </div>
    );
  }
});

// /////////////////////////////////////////////////////////////////// //
// Connect functions

function mapStateToProps (state) {
  return {
  };
}

module.exports = connect(mapStateToProps)(Home);
