'use strict'
import React from 'react'
import _ from 'lodash'
import ChartJS from 'chart.js'

// Actions
import { parseChart } from '../utils/make-chart'

// Utils
import { formatNumber } from '../utils/format'

// Data
import translation from '../../data/translation'

// Constants
import { nineColorPalette } from '../constants'

export class Chart extends React.Component {
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

      const ctx = document.getElementById(`chart-${name}`).getContext('2d')
      this.chart = new ChartJS(ctx, {
        type: data.mark,
        options: {
          tooltips: {
            callbacks: {
              label: (tooltipItem, data) => formatNumber(tooltipItem, 'yLabel')
            }
          }
        },
        data: chart
      })
    })
  }

  render () {
    return (
      <canvas
        id={`chart-${this.props.name}`}>
      </canvas>
    )
  }
}

Chart.propTypes = {
  name: React.PropTypes.string,
  data: React.PropTypes.object
}

export default Chart
