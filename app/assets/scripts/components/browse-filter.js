'use strict'
import React from 'react'
import Collapse from 'rc-collapse'
import _ from 'lodash'

// Utils
import { translate } from '../utils/translation'

class BrowseFilter extends React.Component {
  render () {
    const { name, list } = this.props.filter
    const { handleFilterSelection, onAccordionChange, generateAccordionItems,
      articleFilters } = this.props
    if (this.props.filter.accordion) {
      return (
        <fieldset>
          <legend>{name}</legend>
          <div className='filters__check-group'>
            <Collapse
              accordion={this.props.accordion}
              onChange={onAccordionChange}>
              {generateAccordionItems(list)}
            </Collapse>
          </div>
        </fieldset>
      )
    } else {
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
    }
  }
}

BrowseFilter.propTypes = {
  filter: React.PropTypes.object,
  accordion: React.PropTypes.bool,
  articleFilters: React.PropTypes.array,
  onAccordionChange: React.PropTypes.func,
  handleFilterSelection: React.PropTypes.func,
  generateAccordionItems: React.PropTypes.func
}

export default BrowseFilter
