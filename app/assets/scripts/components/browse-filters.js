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
import filterCategories from '../../data/filter-categories'
import commodityAggregation from '../../data/aggregate-commodity'
import locationAggregation from '../../data/aggregate-region'

class BrowseFilters extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      accordion: false,
      activeAccordionKey: ['1'],
      checklist: []
    }

    // generate list of commodities organized by type
    this.commodityList = {}
    filterCategories.commodities.forEach((commodity) => {
      this.commodityList[commodity] = commodityAggregation[commodity]
    })
    this.commodityList = invertCommodities(this.commodityList)

    // generate list of regions organized by subcontinent
    this.locationList = {}
    filterCategories.locations.forEach((location) => {
      this.locationList[location] = locationAggregation[location]
    })
    this.locationList = countryIdsToSubcontinents(this.locationList)

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
              onChange={this.onAccordionChange} >
              {this.generateAccordionItems(this.commodityList)}
            </Collapse>
          </div>
          <h3 className='filters__group-label'>Location</h3>
          <div className='filters__check-group'>
            <Collapse
              accordion={accordion}
              onChange={this.onAccordionChange}>
              {this.generateAccordionItems(this.locationList)}
            </Collapse>
          </div>
          <h3 className='filters__group-label'>Project</h3>
          <div className='filters__check-group'>
            {filterCategories.projects.map((project, i) => {
              return (
                <div key={'project-' + i}>
                  <input
                    type='checkbox'
                    name={project + '-check'}
                    value={project}
                    onChange={this.handleFilterSelection}
                    checked={_.includes(this.state.checklist, project) } />
                  {project}
                </div>
              )
            })}
          </div>
        </form>
      </div>
    )
  }
}

// Set default props
BrowseFilters.propTypes = {
}

export default BrowseFilters
