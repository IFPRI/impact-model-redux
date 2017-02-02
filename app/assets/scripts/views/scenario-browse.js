'use strict'
import React from 'react'

import BrowseFilters from '../components/browse-filters.js'
import BrowseList from '../components/browse-list.js'

const ScenarioBrowse = React.createClass({
  propTypes: {
  },

  render: function () {
    return (
      <div className='page__browse'>
        <header className='browse__header'>
          <div className='browse__header-text'>
            <h2>Scenarios</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse ut augue aliquet ligula aliquam. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Suspendisse ut augue
              aliquet ligula aliquam.
            </p>
          </div>
        </header>
        <BrowseFilters />
        <BrowseList />
      </div>
    )
  }
})

export default ScenarioBrowse
