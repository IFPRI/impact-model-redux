'use strict'
import React from 'react'

// Actions
import { parseChart } from '../utils/make-chart'

export class Chart extends React.Component {
  render () {
    const { name, data } = this.props

    return (
      <div>Test</div>
    )
  }
}

Chart.propTypes = {
  charts: React.PropTypes.object
}

export default Chart
