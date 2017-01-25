'use strict';
import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import c from 'classnames';

var App = React.createClass({
  displayName: 'App',

  propTypes: {
    routes: React.PropTypes.array,
    children: React.PropTypes.object,
    params: React.PropTypes.object
  },

  //
  // Start life-cycle methods
  //
  componentWillMount: function () {

  },

  componentWillReceiveProps: function (nextProps) {

  },

  //
  // Start render methods
  //
  render: function () {
    let pageClass = _.get(_.last(this.props.routes), 'pageClass', '');

    return (
      <div className={c('page', pageClass)}>
        <main className='page__body' role='main'>
          {this.props.children}
        </main>
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

module.exports = connect(mapStateToProps)(App);
