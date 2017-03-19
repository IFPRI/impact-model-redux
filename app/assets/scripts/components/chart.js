'use strict'
import React from 'react'
import classNames from 'classnames'
import _ from 'lodash'
if (typeof window === 'undefined') global.window = {}
const ChartJS = require('chart.js')

// Actions
import queryDatabase from '../utils/query-database'

// Utils
import { formatNumber } from '../utils/format'
import { translate } from '../utils/translation'

// Constants
import { nineColorPalette, oneColorPalette } from '../constants'

export class Chart extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.initializeChart = this.initializeChart.bind(this)
    this.updateQuery = this.updateQuery.bind(this)
    this.handleDropdown = this.handleDropdown.bind(this)
  }

  componentDidMount () {
    this.initializeChart()
  }

  initializeChart () {
    const { name, data } = this.props
    const chartType = data.mark

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

    if (chartType === 'line') {
      chart.options.responsive = true
      chart.options.maintainAspectRatio = false
      chart.data.datasets[0].fill = false
      chart.data.datasets[0].borderColor = oneColorPalette
      chart.data.datasets[0].borderWidth = 5
      chart.options.scales.yAxes[0].ticks.userCallback = (value) => formatNumber(value)
      chart.options.tooltips = {callbacks: {label: (tooltipItem) => formatNumber(tooltipItem, 'yLabel')}}
    }

    const isPieChart = chartType === 'pie' || chartType === 'doughnut'
    if (isPieChart) {
      delete chart.options.scales
      chart.options.maintainAspectRatio = true
      chart.options.legend = {display: true, position: 'bottom'}
    }

    const aggregation = data.encoding.x.field
    queryDatabase(data, (chartData) => {
      _.forEach(chartData.values, (item) => {
        chart.data.labels.push(translate(item[aggregation]))
        chart.data.datasets[0].data.push(item.Val)
      })
      if (isPieChart || chartType === 'polarArea') {
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

  updateQuery () {
    const chart = []
    console.log(this.props.data.dropdown.values);
    queryDatabase(this.props.data, (chartData) => {
      _.forEach(chartData.values, (item) => {
        chart.push(item.Val)
      })
      this.chart.data.datasets[0].data = chart
      this.chart.update()
    })
  }

  handleDropdown (e) {
    const valueToFront = e.target.value
    const newData = _.cloneDeep(this.props.data)
    newData.dropdown.values = [valueToFront, ...this.props.data.dropdown.values.filter(a => a !== valueToFront)]
    this.props.updateChart(newData, this.props.name)
    this.updateQuery()
  }

  render () {
    const { name, data } = this.props
    const chartType = data.mark

    const chartClass = classNames(
      'figure', {
        'bar-chart': chartType === 'bar' || chartType === 'horizontalBar',
        'pie-chart': chartType === 'pie' || chartType === 'doughnut' || chartType === 'polarArea',
        'line-chart': chartType === 'line'
      })

    let Dropdown = ''
    if (this.props.data.dropdown) {
      Dropdown = <div className='chart-dropdown'>
        <span>{translate(this.props.data.dropdown.field)}:</span>
        <select className={`${name}-dropdown`} defaultValue={this.props.data.dropdown.values[0]} onChange={this.handleDropdown}>
          {this.props.data.dropdown.values.map((value, i) => {
            return <option value={value} key={`${name}-${i}`}>{translate(value)}</option>
          })}
        </select>
      </div>
    }

    return (
      <div className={chartClass}>
        <h5 className='label--chart'>{data.title}</h5>
        <div className='chart-container'>
          <canvas id={name} className='chart'></canvas>
        </div>
        {Dropdown}
      </div>
    )
  }
}

Chart.propTypes = {
  name: React.PropTypes.string,
  data: React.PropTypes.object,
  updateChart: React.PropTypes.func
}

export default Chart
