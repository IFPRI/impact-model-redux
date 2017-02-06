'use strict'
import React from 'react'
import Collapse, { Panel } from 'rc-collapse'
import _ from 'lodash'

import {
  translate,
  invertCommodities,
  countryIdsToSubcontinents } from '../utils/translation'

import { commodities } from '../../data/aggregate-commodity'
import countries from '../../data/aggregate-region'

const BrowseFilters = React.createClass({
  propTypes: {
  },

  getInitialState: function () {
    return {
      accordion: false,
      activeKey: ['1']
    }
  },

  onChange: function (activeKey) {
    this.setState({
      activeKey
    })
  },

  generateItems: function (list) {
    return _.map(list, (subtypes, type) => {
      return (
        <Panel header={type} key={'filter-item-' + type}>
          {subtypes.map((subtype) => {
            // use the id attribute in the case of countries
            if (subtype.id) subtype = subtype.id
            return (
              <div className='filters__check-group' key={subtype + '-check-group'}>
                <input type='checkbox' name={subtype + '-check'} value={subtype + '-check'} />
                {translate(subtype)}
              </div>
            )
          })}
        </Panel>
      )
    })
  },

  render: function () {
    const commodityList = invertCommodities(commodities)
    const countryList = countryIdsToSubcontinents(countries)
    const accordion = this.state.accordion
    return (
      <div className='browse__filters'>
        <header className='filters__header'>
          <h2>Filter</h2>
        </header>
        <form className='filters__form'>
          <h3 className='filters__group-label'>Type</h3>
          <div className='filters__check-group'>
            <input type='checkbox' name='custom-check' value='custom-check' />
            Custom
          </div>
          <div className='filters__check-group'>
            <input type='checkbox' name='country-summary-check' value='country-summary-check' />
            Country Summary
          </div>
          <div className='filters__check-group'>
            <input type='checkbox' name='commodity-summary-check' value='commodity-summary-check' />
            Commodity Summary
          </div>
          <h3 className='filters__group-label'>Commodities</h3>
          <div className='filters__check-group'>
            <Collapse
              accordion={accordion}
              onChange={this.onChange} >
              {this.generateItems(commodityList)}
            </Collapse>
          </div>
          <h3 className='filters__group-label'>Location</h3>
          <div className='filters__check-group'>
            <Collapse
              accordion={accordion}
              onChange={this.onChange}>
              {this.generateItems(countryList)}
            </Collapse>
          </div>
        </form>
      </div>
    )
  }
})

export default BrowseFilters
