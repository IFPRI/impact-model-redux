'use strict'
import React from 'react'
import { Panel } from 'rc-collapse'
import _ from 'lodash'

// Actions
import { updateArticleFilters } from '../actions'

// Utils
import {
  translate,
  invertCommodities } from '../utils/translation'

// Data
import filterCategories from '../../data/filter-categories'
import commodityAggregation from '../../data/aggregate-commodity'

// Components
import BrowseFilter from './browse-filter'

export class BrowseFilters extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      accordion: false
    }

    this.filters = []

    if (props.type === 'brief') {
      // generate list of type filters
      this.filters.push({
        name: 'Type',
        list: ['custom', 'commodity-summary', 'country-summary'],
        accordion: false
      })
      // generate list of commodities organized by type
      let commodityList = {}
      filterCategories.commodities.forEach((commodity) => {
        commodityList[commodity] = commodityAggregation[commodity]
      })
      commodityList = invertCommodities(commodityList)
      this.filters.push({
        name: 'Commodities',
        list: commodityList,
        accordion: true
      })
    } else if (props.type === 'scenario') {
      // generate list of tags
      this.filters.push({
        name: 'Tags',
        list: filterCategories.tags,
        accordion: false
      })
    }
    // generate list of projects
    this.filters.push({
      name: 'Projects',
      list: filterCategories.projects,
      accordion: false
    })

    this.handleFilterSelection = this.handleFilterSelection.bind(this)
    this.generateAccordionItems = this.generateAccordionItems.bind(this)
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
        <Panel header={translate(type)} key={`filter-item-${type}`}>
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
          {this.filters.map(filter => {
            return <BrowseFilter
              key={filter.name}
              filter={filter}
              accordion={accordion}
              articleFilters={this.props.articleFilters}
              onAccordionChange={this.onAccordionChange}
              handleFilterSelection={this.handleFilterSelection}
              generateAccordionItems={this.generateAccordionItems}
            />
          })}
        </form>
      </div>
    )
  }
}

// Set default props
BrowseFilters.propTypes = {
  dispatch: React.PropTypes.func,
  articleFilters: React.PropTypes.array,
  type: React.PropTypes.string
}

export default BrowseFilters
