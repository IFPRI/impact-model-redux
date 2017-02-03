'use strict'
import React from 'react'

import { commodities } from '../../data/aggregate-commodity'

const BrowseFilters = React.createClass({
  propTypes: {
  },

  render: function () {
    return (
      <div className='browse__filters'>
        <header className='filters__header'>
          <h2>Filter</h2>
        </header>
        <form className='filters__form'>
          <h3 className='filters__group-label'>Type</h3>
          <div className='filters__check-group'>
            <input type='checkbox' name='custom' value='custom' />
            Custom
          </div>
          <div className='filters__check-group'>
            <input type='checkbox' name='country-summary' value='country-summary' />
            Country Summary
          </div>
          <div className='filters__check-group'>
            <input type='checkbox' name='commodity-summary' value='commodity-summary' />
            Commodity Summary
          </div>
          <h3 className='filters__group-label'>Commodities</h3>
        </form>
      </div>
    )
  }
})

export default BrowseFilters
