'use strict'
import React from 'react'

export class ChartGroupedBar extends React.Component {
  render () {
    const { name, data } = this.props

    return (
      <div className='figure grouped-bar-chart'>
        <h5 className='label--chart'>{data.title}</h5>
        <div className='chart-container'>
          <canvas id={name} className='chart'></canvas>
        </div>
      </div>
    )
  }
}

ChartGroupedBar.propTypes = {
  name: React.PropTypes.string,
  data: React.PropTypes.object,
  scenarios: React.PropTypes.array,
  updateChart: React.PropTypes.func
}

export default ChartGroupedBar
