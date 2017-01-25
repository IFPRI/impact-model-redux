'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import _ from 'lodash';
import c from 'classnames';

import { isValidLanguage, setLanguage } from '../utils/i18n';

var App = React.createClass({
  displayName: 'App',

  propTypes: {
    routes: React.PropTypes.array,
    children: React.PropTypes.object,
    params: React.PropTypes.object
  },

  validateLanguage: function (lang) {
    if (isValidLanguage(lang)) {
      setLanguage(lang);
    } else {
      hashHistory.replace('/uhoh');
    }
  },

  //
  // Start life-cycle methods
  //
  componentWillMount: function () {
    this.validateLanguage(this.props.params.lang);
  },

  componentWillReceiveProps: function (nextProps) {
    this.validateLanguage(nextProps.params.lang);
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
