'use strict'
import React from 'react'
import Collapse, { Panel } from 'rc-collapse'
import _ from 'lodash'

// Utils
import {
  translate,
  invertCommodities,
  countryIdsToSubcontinents } from '../utils/translation'

// Data
import { commodities } from '../../data/aggregate-commodity'
import countries from '../../data/aggregate-region'

class BrowseFilters extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      accordion: false,
      activeAccordionKey: ['1'],
      checklist: []
    }
    this.onAccordionChange = this.onAccordionChange.bind(this)
    this.handleFilterSelection = this.handleFilterSelection.bind(this)
  }

  onAccordionChange (activeAccordionKey) {
    this.setState({
      activeAccordionKey
    })
  }

  handleFilterSelection (event) {
    const checkbox = event.target.value
    let checklist = this.state.checklist
    checklist = !_.includes(checklist, checkbox)
      ? checklist.concat(checkbox)
      : checklist.filter((opt) => opt !== checkbox)

    this.setState({checklist: checklist})
  }

  generateAccordionItems (list) {
    list = _.pickBy(list, (value, key) => key)
    return _.map(list, (subtypes, type) => {
      return (
        <Panel header={type} key={'filter-item-' + type}>
          {subtypes.map((subtype) => {
            // use the id attribute in the case of countries
            if (subtype.id) subtype = subtype.id
            return (
              <div className='filters__check-group' key={subtype + '-check-group'}>
                <input
                  type='checkbox'
                  name={subtype + '-check'}
                  value={subtype}
                  onChange={this.handleFilterSelection}
                  checked={_.includes(this.state.checklist, subtype) } />
                {translate(subtype)}
              </div>
            )
          })}
        </Panel>
      )
    })
  }

  render () {
    const commodityList = invertCommodities(commodities)
    const countryList = countryIdsToSubcontinents(countries)
    const accordion = this.state.accordion
    return (
      <div className='browse__filters'>
        <h5>Filter</h5>
        <form className='filters__form'>
          <fieldset>
            <legend>Type</legend>
            <label><input type="checkbox" name='custom-check' value='custom-check' />Custom</label>
            <label><input type="checkbox" name='country-summary-check' value='country-summary-check' />Country Summary</label>
            <label><input type="checkbox" name='commodity-summary-check' value='commodity-summary-check' />Commodity Summary</label>
          </fieldset>
          <fieldset>
            <legend>Commodities</legend>
            <ul>
              <li className='filters__check-group'>
                <Collapse
                  accordion={accordion}
                  onChange={this.onAccordionChange} >
                  {this.generateAccordionItems(commodityList)}
                </Collapse>
              </li>
            </ul>
          </fieldset>
          <fieldset>
            <legend>Location</legend>
            <ul>
              <li className='filters__check-group'>
                <Collapse
                  accordion={accordion}
                  onChange={this.onAccordionChange}>
                  {this.generateAccordionItems(countryList)}
                </Collapse>
              </li>
            </ul>
          </fieldset>
        </form>
      </div>
    )
  }
}

// Set default props
BrowseFilters.propTypes = {
}

export default BrowseFilters
