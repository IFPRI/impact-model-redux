'use strict'
import React from 'react'
import Collapse, { Panel } from 'rc-collapse'
import _ from 'lodash'

import { invertCommodities } from '../utils/translation'

import { commodities } from '../../data/aggregate-commodity'

const BrowseFilters = React.createClass({
  propTypes: {
  },

  getInitialState: function () {
    return {
      accordion: false,
      activeKey: ['4']
    }
  },

  onChange: function (activeKey) {
    this.setState({
      activeKey
    })
  },

  getItems: function () {
    const commodityList = invertCommodities(commodities)
    const items = []
    _.forEach(commodityList, (subtypes, type) => {
      items.push(
        <Panel header={type} key={'filter-item-' + type}>
          {subtypes.map((subtype) => {
            return (
              <div className='filters__check-group' key={subtype + '-check-group'}>
                <input type='checkbox' name={subtype + '-check'} value={subtype + '-check'} />
                {subtype}
              </div>
            )
          })}
        </Panel>
      )
    })

    return items
  },

  toggle: function () {
    this.setState({
      accordion: !this.state.accordion
    })
  },

  render: function () {
    const accordion = this.state.accordion
    const activeKey = this.state.activeKey

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
              onChange={this.onChange}
              activeKey={activeKey}
            >
              {this.getItems()}
            </Collapse>
          </div>
        </form>
      </div>
    )
  }
})

export default BrowseFilters
