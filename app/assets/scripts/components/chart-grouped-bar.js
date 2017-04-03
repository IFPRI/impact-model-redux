'use strict'
import React from 'react'
import _ from 'lodash'
if (typeof window === 'undefined') global.window = {}
const ChartJS = require('chart.js')

// Actions
import queryDatabase from '../utils/query-database'

// Utils
import { formatNumber } from '../utils/format'
import { translate } from '../utils/translation'

// Constants
import { sixColorPalette } from '../constants'

export class ChartGroupedBar extends React.Component {
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

    const chart = {
      type: 'bar',
      options: {
        responsive: true,
        // todo: determine why "maintainAspectRatio: false" currently sets the chart height to 0
        // maintainAspectRatio: false,
        legend: {
          display: false
        },
        tooltips: {
          callbacks: {
            label: (tooltipItem) => formatNumber(tooltipItem, 'yLabel')
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              drawOnChartArea: false,
              drawTicks: true,
              tickMarkLength: 8
            },
            ticks: {
              userCallback: (value) => formatNumber(value),
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
              fontColor: '#9E9E9E',
              fontFamily: "'Nunito', 'Helvetica Neue', Helvetica, Arial, sans-serif",
              beginAtZero: false,
              padding: 5
            }
          }]
        }
      },
      data: {
        labels: [],
        datasets: []
      }
    }

    queryDatabase(data, data.scenarios)
    .then((chartData) => {
      const records = {}
      chartData.forEach((data, i) => {
        chart.data.labels.push(data.source)
        // build data structure...
        data.values.forEach((record) => {
          if (i === 0) {
            chart.data.datasets.push({})
          }
          const label = translate(record.impactparameter)
          if (!records[label]) {
            records[label] = []
          }
          records[label].push(record.Val)
        })
      })
      // ...then apply to chart
      let i = 0
      _.forEach(records, (value, key) => {
        chart.data.datasets[i].label = key
        chart.data.datasets[i].backgroundColor = sixColorPalette[i]
        chart.data.datasets[i].data = value
        i++
      })
      this.chart = new ChartJS(
        document.getElementById(name).getContext('2d'),
        chart
      )
    })
  }

  updateQuery (newData) {
    const data = this.props.data
    const scenarios = data.scenarios
    queryDatabase(newData, scenarios)
    .then((chartData) => {
      // build the data structure
      const records = {}
      chartData.forEach((data, i) => {
        data.values.forEach((record) => {
          const label = translate(record.impactparameter)
          if (!records[label]) {
            records[label] = []
          }
          records[label].push(record.Val)
        })
      })
      // clear the previous datasets and populate the chart
      this.chart.data.datasets = []
      let i = 0
      _.forEach(records, (value, key) => {
        this.chart.data.datasets.push({})
        this.chart.data.datasets[i].label = key
        this.chart.data.datasets[i].backgroundColor = sixColorPalette[i]
        this.chart.data.datasets[i].data = value
        i++
      })

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
      <div className='figure stripe-chart'>
        <h5 className='label--chart'>{data.title}</h5>
        <div className='chart-container'>
          <canvas id={name} className='chart'></canvas>
        </div>
        {Dropdowns}
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
