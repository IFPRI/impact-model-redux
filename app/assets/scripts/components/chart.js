'use strict'
import React from 'react'
import classNames from 'classnames'
import _ from 'lodash'
if (typeof window === 'undefined') global.window = {}
const ChartJS = require('chart.js')

// Actions
import queryDatabase from '../utils/query-database'

// Utils
import { toTitleCase, formatNumber } from '../utils/format'

// Constants
import { nineColorPalette } from '../constants'

// Data
import translation from '../../data/translation'

export class Chart extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.dropdownValues = props.data.dropdown
    if (this.dropdownValues && this.dropdownValues.field && this.dropdownValues.values) {
      this.dropdownValues = this.dropdownValues.values.split(',').map((value) => value.trim())
    }
    this.activeQuery = this.dropdownValues[0] || null

    this.initializeChart = this.initializeChart.bind(this)
    this.updateQuery = this.updateQuery.bind(this)
  }

  initializeChart () {
    const { name, data } = this.props
    const chartType = 'bar' // data.mark

    let chart = {
      type: chartType,
      options: {
        responsive: true,
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {}
          }],
          xAxes: [{
            ticks: {}
          }]
        }
      },
      data: {
        labels: [],
        datasets: [{
          data: [],
          backgroundColor: nineColorPalette
        }]
      }
    }

    if (chartType === 'bar') {
      chart.options.responsive = true
      chart.options.maintainAspectRatio = false
      chart.options.scales.yAxes[0].ticks.userCallback = (value) => formatNumber(value)
      chart.options.tooltips = {callbacks: {label: (tooltipItem) => formatNumber(tooltipItem, 'yLabel')}}
    }

    if (chartType === 'horizontalBar') {
      chart.options.scales.xAxes[0].ticks.userCallback = (value) => formatNumber(value)
      chart.options.tooltips = {callbacks: {label: (tooltipItem) => formatNumber(tooltipItem, 'xLabel')}}
    }

    if (chartType === 'pie' || chartType === 'doughnut') {
      delete chart.options.scales
      chart.options.responsive = true
      chart.options.maintainAspectRatio = true
      chart.options.legend = {display: true, position: 'bottom'}
    }

    const aggregation = data.encoding.x.field
    queryDatabase(data, this.activeQuery, (chartData) => {
      _.forEach(chartData.values, (item) => {
        chart.data.labels.push(translation[item[aggregation]])
        chart.data.datasets[0].data.push(item.Val)
      })
      if (chartType === 'pie' || chartType === 'doughnut') {
        chart.options.tooltips = {callbacks: {label: (tooltipItem, data) => {
          const label = chart.data.labels[tooltipItem.index]
          const datasetLabel = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]
          return ` ${label}: ${formatNumber(datasetLabel)}`
        }}}
      }

      this.chart = new ChartJS(
        document.getElementById(name).getContext('2d'),
        chart
      )
    })
  }

  updateQuery (event) {
    this.activeQuery = event.target.value
    const chart = []
    queryDatabase(this.props.data, this.activeQuery, (chartData) => {
      _.forEach(chartData.values, (item) => {
        chart.push(item.Val)
      })
      this.chart.data.datasets[0].data = chart
      this.chart.update()
    })
  }

  render () {
    const { name, data } = this.props
    const activeQuery = this.activeQuery
    const impactParameter = translation[data.fixed.impactparameter]
    const focus = translation[activeQuery]
    const year = data.fixed.year.toString()
    const aggregation = toTitleCase(translation[data.encoding.x.field])
    const chartType = 'bar' // data.marked
    const chartClass = classNames(
      'chart-container1', {
        'full-width': chartType !== 'pie' && chartType !== 'doughnut',
        'pie-width': chartType === 'pie' || chartType === 'doughnut'
      })

    return (
      <div className={chartClass} ref='chartContainer'>
        <h3>{`${impactParameter} for ${focus} in ${year}, Aggregated by ${aggregation}`}</h3>
        <div className='chart-container'>
          <canvas id={name}></canvas>
        </div>
        <div className='chart-dropdown'>
          <span>Filter:</span>
          <select className={`${name}-dropdown`} defaultValue={activeQuery} onChange={this.updateQuery}>
            {this.dropdownValues.map((value, i) => {
              return <option value={value} key={`${name}-${i}`}>{translation[value]}</option>
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
