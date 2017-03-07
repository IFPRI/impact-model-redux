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
  constructor (props, context) {
    super(props, context)
    this.dropdownValues = props.data.dropdown
    if (this.dropdownValues && this.dropdownValues.field && this.dropdownValues.values) {
      this.dropdownValues = this.dropdownValues.values.split(',').map((value) => value.trim())
    }

    this.state = {
      activeQuery: this.dropdownValues[0] || null
    }

    this.updateQuery = this.updateQuery.bind(this)
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

    parseChart(data, this.state.activeQuery, (chartData) => {
      _.forEach(chartData.values, (item) => {
        chart.labels.push(translation[item[field]])
        chart.datasets[0].data.push(item.Val)
      })

      const ctx = document.getElementById(name).getContext('2d')
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

  updateQuery (event) {
    const activeQuery = event.target.value
    const chart = []
    parseChart(this.props.data, activeQuery, (chartData) => {
      _.forEach(chartData.values, (item) => {
        chart.push(item.Val)
      })
      this.chart.data.datasets[0].data = chart
      this.chart.update()
    })
  }

  render () {
    const name = this.props.name
    return (
      <div>
        <canvas id={name}></canvas>
          <div className='chart-dropdown'>
          <span>Filter</span>
          <select className={`${name}-dropdown`} defaultValue={null || this.state.activeQuery} onChange={this.updateQuery}>
            {this.dropdownValues.map((value, i) => {
              return <option value={value} key={`${name}-${i}`}>{value}</option>
            })}
          </select>
        </div>
      </div>
    )
  }
}

Chart.propTypes = {
  name: React.PropTypes.string,
  data: React.PropTypes.object
}

export default Chart
