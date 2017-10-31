'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import _ from 'lodash'
if (typeof window === 'undefined') global.window = {}
const ChartJS = require('chart.js')

// Actions
import { updatePreviewerError } from '../actions'

// Utils
import { formatNumber } from '../utils/format'
import { translate } from '../utils/translation'
import queryDatabase from '../utils/query-database'

// Constants
import { fourteenColorPalette } from '../constants'

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
            gridLines: {
              drawOnChartArea: false,
              drawTicks: true,
              tickMarkLength: 8
            },
            ticks: {
              beginAtZero: false,
              padding: 5,
              fontColor: '#9E9E9E',
              fontFamily: "'Nunito', 'Helvetica Neue', Helvetica, Arial, sans-serif"
            }
          }],
          xAxes: [{
            gridLines: {
              drawOnChartArea: false,
              drawTicks: true,
              tickMarkLength: 8
            },
            ticks: {
              autoSkip: false,
              beginAtZero: false,
              padding: 5,
              fontColor: '#9E9E9E',
              fontFamily: "'Nunito', 'Helvetica Neue', Helvetica, Arial, sans-serif"
            }
          }]
        }
      },
      data: {
        labels: [],
        datasets: [{
          data: [],
          backgroundColor: fourteenColorPalette
        }]
      }
    }

    if (data.legend) {
      chart.options.legend.display = true
      chart.options.legend.position = data.legend
    }

    if (chartType === 'bar') {
      chart.options.responsive = true
      chart.options.maintainAspectRatio = false
      chart.data.datasets[0].backgroundColor = '#83C61A'
      chart.options.scales.yAxes[0].ticks.userCallback = (value) => isNaN(value) || data.encoding.y.field === 'year' ? value : formatNumber(value)
      chart.options.scales.xAxes[0].ticks.userCallback = (value) => isNaN(value) || data.encoding.x.field === 'year' ? value : formatNumber(value)
      chart.options.tooltips = {callbacks: {label: (tooltipItem) => formatNumber(tooltipItem, 'yLabel')}}
    }

    if (chartType === 'horizontalBar') {
      chart.data.datasets[0].backgroundColor = '#83C61A'
      chart.options.maintainAspectRatio = false
      chart.options.scales.yAxes[0].ticks.userCallback = (value) => isNaN(value) || data.encoding.y.field === 'year' ? value : formatNumber(value)
      chart.options.scales.xAxes[0].ticks.userCallback = (value) => isNaN(value) || data.encoding.x.field === 'year' ? value : formatNumber(value)
      chart.options.tooltips = {callbacks: {label: (tooltipItem) => formatNumber(tooltipItem, 'xLabel')}}
    }

    const isPieChart = chartType === 'pie' || chartType === 'doughnut'
    if (isPieChart) {
      delete chart.options.scales
      chart.options.maintainAspectRatio = true
    }
    if (chartType === 'doughnut') {
      chart.options.cutoutPercentage = 60
    }

    const axes = ['x', 'y']
    axes.forEach((axis) => {
      if (data.encoding[axis].field !== 'Val' && !isPieChart) {
        chart.options.scales[axis + 'Axes'][0].scaleLabel = {
          display: true,
          labelString: translate(data.encoding.x.field),
          fontColor: '#9E9E9E',
          fontFamily: "'Nunito', 'Helvetica Neue', Helvetica, Arial, sans-serif"
        }
      }
    })

    const aggregation = data.encoding.x.field
    queryDatabase(data)
    .then((chartData) => {
      // sort data alphabetically by label
      const dataset = chartData.values.map((item) => {
        return {
          data: item.Val,
          label: translate(item[aggregation]) || item[aggregation]
        }
      }).sort((a, b) => a.label > b.label)
      chart.data.datasets[0].data = dataset.map((item) => item.data)
      chart.data.labels = dataset.map((item) => item.label)

      if (isPieChart || chartType === 'polarArea') {
        chart.options.tooltips = {callbacks: {label: (tooltipItem, data) => {
          const label = chart.data.labels[tooltipItem.index]
          const datasetLabel = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]
          return ` ${label}: ${formatNumber(datasetLabel)}`
        }}}
      }
      try {
        this.chart = new ChartJS(
          document.getElementById(name).getContext('2d'),
          chart
        )
      } catch (err) {
        this.props.dispatch(updatePreviewerError(err))
      }
    })
  }

  updateQuery (newData) {
    const aggregation = newData.encoding.x.field
    queryDatabase(newData)
    .then((chartData) => {
      const chart = chartData.values.map((item) => {
        return {
          data: item.Val,
          label: translate(item[aggregation]) || item[aggregation]
        }
      }).sort((a, b) => a.label > b.label)
      this.chart.data.datasets[0].data = chart.map((item) => item.data)
      this.chart.data.labels = chart.map((item) => item.label)
      this.chart.update()
    })
  }

  handleDropdown (e) {
    const valueToFront = e.target.value
    const dropdown = e.target.id
    const newData = _.cloneDeep(this.props.data)
    newData[dropdown].values = [valueToFront, ...this.props.data[dropdown].values.filter(a => a !== valueToFront)]
    this.props.updateChart(newData, this.props.name)
    this.updateQuery(newData)
  }

  render () {
    const { name, data } = this.props
    const chartType = data.mark

    const chartClass = classNames(
      'figure', {
        'bar-chart': chartType === 'bar' || chartType === 'horizontalBar',
        'pie-chart': chartType === 'pie' || chartType === 'doughnut' || chartType === 'polarArea'
      })

    const Dropdowns = Object.keys(this.props.data)
      .filter(key => key.match(/dropdown/))
      .map(key => {
        return <div key={key} className='chart-dropdown'>
          <label>{translate(this.props.data[key].field)}:</label>
          <div className='select--wrapper'>
            <select id={key} className={`${name}`} defaultValue={this.props.data[key].values[0]} onChange={this.handleDropdown}>
              {this.props.data[key].values.map((value, i) => {
                return <option value={value} key={`${name}-${key}-${i}`}>{translate(value)}</option>
              })}
            </select>
          </div>
        </div>
      })
    return (
      <div className={chartClass}>
        <h5 className='label--chart'>{data.title}</h5>
        <div className='chart-container' style={{height: data.height}}>
          <canvas id={name} className='chart'></canvas>
        </div>
        {Dropdowns}
      </div>
    )
  }
}

Chart.propTypes = {
  dispatch: PropTypes.func,
  name: PropTypes.string,
  data: PropTypes.object,
  updateChart: PropTypes.func
}

export default Chart
