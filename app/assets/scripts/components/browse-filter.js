'use strict'
import React from 'react'
import Collapse from 'rc-collapse'
import Autocomplete from 'react-autocomplete'
import _ from 'lodash'

// Utils
import { translate, untranslate } from '../utils/translation'

class BrowseFilter extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: ''
    }
  }

  handleAutoCompleteSelect (value) {
    this.setState({ value: '' })
    this.props.handleFilterSelection(_.includes(this.props.articleFilters, untranslate(value)), untranslate(value))
  }

  render () {
    const { name, list, type, accordion } = this.props.filter
    const { handleFilterSelection, onAccordionChange, generateAccordionItems,
      articleFilters } = this.props
    switch (type) {
      case 'accordion':
        return (
          <fieldset>
            <legend>{name}</legend>
            <div className='filters__check-group'>
              <Collapse
                accordion={accordion}
                onChange={onAccordionChange}>
                {generateAccordionItems(list)}
              </Collapse>
            </div>
          </fieldset>
        )
      case 'checkbox':
        return (
          <fieldset>
            <legend>{name}</legend>
            <ul className='filters__main-check-group'>
              {list.map(li => {
                const checked = _.includes(articleFilters, li)
                return <li key={li}><input type="checkbox" name={`${li}-check`} value={li} onChange={handleFilterSelection.bind(null, checked, li)} checked={checked}/><label>{translate(li)}</label></li>
              })}
            </ul>
          </fieldset>
        )
      case 'autocomplete':
        return (
          <fieldset>
            <legend>{name}</legend>
            <Autocomplete
              value={this.state.value}
              items={list}
              getItemValue={a => a}
              shouldItemRender={filterAutoComplete}
              onChange={(event, value) => this.setState({ value })}
              onSelect={value => this.handleAutoCompleteSelect(value)}
              renderItem={(item, isHighlighted) => (
                <div
                  key={item}
                  className={(isHighlighted) ? 'highlighted' : ''}
                >{item}</div>
              )}
            />
          </fieldset>
        )
    }
  }
}

function filterAutoComplete (str, value) {
  return (
    str.toLowerCase().indexOf(value.toLowerCase()) !== -1
  )
}

BrowseFilter.propTypes = {
  filter: React.PropTypes.object,
  accordion: React.PropTypes.bool,
  articleFilters: React.PropTypes.array,
  onAccordionChange: React.PropTypes.func,
  handleFilterSelection: React.PropTypes.func,
  generateAccordionItems: React.PropTypes.func,
  handleAutoCompleteSelect: React.PropTypes.func
}

export default BrowseFilter
