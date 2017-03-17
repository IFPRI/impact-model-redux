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

export class BrowseFilters extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      accordion: false
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

    this.handleFilterSelection = this.handleFilterSelection.bind(this)
  }

  handleFilterSelection (checked, subtype) {
    const { articleFilters, dispatch } = this.props
    const newArticleFilters = checked
      ? articleFilters.filter(opt => opt !== subtype)
      : articleFilters.concat(subtype)

    dispatch(updateArticleFilters(newArticleFilters))
  }

  handleFilterSelectionAll (checked, list) {
    const { articleFilters, dispatch } = this.props
    const newArticleFilters = checked
    ? articleFilters.filter(opt => !_.includes(list, opt))
    : _.uniq(articleFilters.concat(list))

    dispatch(updateArticleFilters(newArticleFilters))
  }

  generateAccordionItems (list) {
    list = _.pickBy(list, (value, key) => key)
    return _.map(list, (subtypes, type) => {
      const checked = list[type].every(t => _.includes(this.props.articleFilters, t))
      return (
        <Panel header={type} key={`filter-item-${type}`}>
          <div className='filters__check-group' key={`${type}-check-group`}>
            <input
              type='checkbox'
              name={`${type}-all`}
              value={type}
              onChange={this.handleFilterSelectionAll.bind(this, checked, list[type])}
              checked={checked} />
            <label>All</label>
          </div>
          {subtypes.map((subtype) => {
            // use the id attribute in the case of countries
            if (subtype.id) subtype = subtype.id
            const subChecked = _.includes(this.props.articleFilters, subtype)
            return (
              <div className='filters__check-group' key={subtype + '-check-group'}>
                <input
                  type='checkbox'
                  name={subtype + '-check'}
                  value={subtype}
                  onChange={this.handleFilterSelection.bind(this, subChecked, subtype)}
                  checked={subChecked} />
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
        <h5 className='header--small'>Filter</h5>
        <form className='filters__form'>
          <fieldset>
            <legend>Type</legend>
            <ul className='filters__main-check-group'>
              <li><label><input type="checkbox" name='custom-check' value='custom' onChange={this.handleFilterSelection} />Custom</label></li>
              <li><label><input type="checkbox" name='country-summary-check' value='country-summary' onChange={this.handleFilterSelection} />Country Summary</label></li>
              <li><label><input type="checkbox" name='commodity-summary-check' value='commodity-summary' onChange={this.handleFilterSelection} />Commodity Summary</label></li>
            </ul>
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
                {this.generateAccordionItems(this.locationList)}
              </Collapse>
            </div>
          </fieldset>
          <fieldset>
            <legend>Projects</legend>
            <ul className='filters__main-check-group'>
              {filterCategories.projects.map((project, i) => {
                return (
                  <li key={'project-' + i}>
                    <input
                      type='checkbox'
                      name={project + '-check'}
                      value={project}
                      onChange={this.handleFilterSelection}
                      checked={_.includes(this.props.articleFilters, project) } />
                    <label>{project}</label>
                  </li>
                )
              })}
            </ul>
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
