'use strict'
import React from 'react'
import _ from 'lodash'
import { HorizontalBar } from '../../../../node_modules/react-chartjs-2'

// Actions
import { parseChart } from '../utils/make-chart'

// Utils
import { formatNumber } from '../utils/format'

// Data
import translation from '../../data/translation'

// Constants
import { nineColorPalette } from '../constants'

export class Chart extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      chart: ''
    }
  }
  componentDidMount () {
    const { name, data } = this.props
    const field = data.encoding.x.field
    const chart = {
      labels: [],
      datasets: [{
        backgroundColor: nineColorPalette,
        data: []
      }]
    }
    parseChart(data, (chartData) => {
      _.forEach(chartData.data.values, (item) => {
        chart.labels.push(translation[item[field]])
        chart.datasets[0].data.push(item.Val)
      })
      this.setState({chart: <HorizontalBar data={chart} />})
    })
  }

  render () {
    return (
      <div>
        {this.state.chart
          ? this.state.chart
          : ''}
      </div>
    )
  }
}

Chart.propTypes = {
  data: React.PropTypes.object,
  chart: React.PropTypes.string
}

export default Chart
