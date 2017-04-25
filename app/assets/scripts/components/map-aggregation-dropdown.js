'use strict'
import React from 'react'

export class MapAggregationDropdown extends React.Component {
  render () {
    return (
      <div className='map-dropdown'>
        <label>Aggregation:</label>
        <div className='select--wrapper'>
          <select id='aggregation' defaultValue='region' onChange={this.props.onChange}>
            <option value='region'>Region</option>
            <option value='agg_subcontinent'>Subcontinent</option>
            <option value='agg_continent'>Continent</option>
          </select>
        </div>
      </div>
    )
  }
}

MapAggregationDropdown.propTypes = {
  onChange: React.PropTypes.func
}

export default MapAggregationDropdown
