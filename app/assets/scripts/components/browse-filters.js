'use strict'
import React from 'react'
import Collapse, { Panel } from 'rc-collapse'
import _ from 'lodash'

// Actions
import { updateArticleFilters } from '../actions'

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
      activeAccordionKey: [],
      articleFilters: []
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
    let articleFilters = this.props.articleFilters
    articleFilters = !_.includes(articleFilters, checkbox)
      ? articleFilters.concat(checkbox)
      : articleFilters.filter((opt) => opt !== checkbox)

    this.props.dispatch(updateArticleFilters(articleFilters))
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
                  checked={_.includes(this.props.articleFilters, subtype) } />
                <label>{translate(subtype)}</label>
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
            <div className='filters__check-group'>
              <Collapse
                accordion={accordion}
                onChange={this.onAccordionChange} >
                {this.generateAccordionItems(this.commodityList)}
              </Collapse>
            </div>
          </fieldset>
          <fieldset>
            <legend>Location</legend>
            <div className='filters__check-group'>
              <Collapse
                accordion={accordion}
                onChange={this.onAccordionChange}>
                {this.generateAccordionItems(this.countryList)}
              </Collapse>
            </div>
          </fieldset>
          <fieldset>
            <legend>Projects</legend>
            <div className='filters__check-group'>
              {filterCategories.projects.map((project, i) => {
                return (
                  <div key={'project-' + i}>
                    <input
                      type='checkbox'
                      name={project + '-check'}
                      value={project}
                      onChange={this.handleFilterSelection}
                      checked={_.includes(this.props.articleFilters, project) } />
                    <label>{project}</label>
                  </div>
                )
              })}
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

// Set default props
BrowseFilters.propTypes = {
  dispatch: React.PropTypes.func,
  articleFilters: React.PropTypes.array
}

export default BrowseFilters
