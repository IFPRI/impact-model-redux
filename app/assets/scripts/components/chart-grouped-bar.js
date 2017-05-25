'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
if (typeof window === 'undefined') global.window = {}
const ChartJS = require('chart.js')

// Actions
import { updateError } from '../actions'

// Utils
import { formatNumber, formatScenario } from '../utils/format'
import { translate } from '../utils/translation'
import queryDatabase from '../utils/query-database'

// Constants
import { fourteenColorPalette } from '../constants'

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
        maintainAspectRatio: false,
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
              userCallback: (value) => isNaN(value) || data.encoding.y.field === 'year' ? value : formatNumber(value),
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
              min: 0,
              padding: 5,
              fontColor: '#9E9E9E',
              fontFamily: "'Nunito', 'Helvetica Neue', Helvetica, Arial, sans-serif"
            }
          }]
        }
      },
      data: {
        labels: [],
        datasets: []
      }
    }

    const axes = ['x', 'y']
    axes.forEach((axis) => {
      if (data.encoding[axis].field !== 'Val') {
        chart.options.scales[axis + 'Axes'][0].scaleLabel = {
          display: true,
          labelString: translate(data.encoding.x.field),
          fontColor: '#9E9E9E',
          fontFamily: "'Nunito', 'Helvetica Neue', Helvetica, Arial, sans-serif"
        }
      }
    })

    if (data.legend) {
      chart.options.legend.display = true
      chart.options.legend.position = data.legend
    }

    const series = []
    queryDatabase(data, data.scenarios)
    .then((chartData) => {
      const secondaryGrouping = chartData.secondaryGrouping
      if (secondaryGrouping) {
        const seriesValues = _.uniq(chartData.values.map(v => v[secondaryGrouping]))
        seriesValues.forEach(sv => {
          series.push(chartData.values.filter(v => v[secondaryGrouping] === sv))
        })
      } else {
        // with no series, don't use a legend
        series.push(chartData.values)
        chart.options.legend.display = true
      }

      series.forEach((serie, i) => {
        chart.data.datasets.push({
          data: [],
          label: serie[0][secondaryGrouping]
        })

        chart.data.datasets[i].backgroundColor = fourteenColorPalette[i]
        const aggregation = data.encoding.x.field
        _.forEach(serie, item => {
          if (i === 0) {
            chart.data.labels.push(translate(item[aggregation]) || item[aggregation])
          }
          chart.data.datasets[i].data.push(item.Val)
        })
      })
      try {
        this.chart = new ChartJS(
          document.getElementById(name).getContext('2d'),
          chart
        )
      } catch (err) {
        this.props.dispatch(updateError(err))
      }
    })
  }

  updateQuery (newData) {
    const series = []
    queryDatabase(newData)
    .then((chartData) => {
      const secondaryGrouping = chartData.secondaryGrouping
      if (secondaryGrouping) {
        const seriesValues = _.uniq(chartData.values.map(v => v[secondaryGrouping]))
        seriesValues.forEach(sv => {
          series.push(chartData.values.filter(v => v[secondaryGrouping] === sv))
        })
      } else {
        // with no series, don't use a legend
        series.push(chartData.values)
        this.chart.options.legend.display = true
      }

      series.forEach((serie, i) => {
        this.chart.data.datasets[i].data = []
        _.forEach(serie, item => {
          this.chart.data.datasets[i].data.push(item.Val)
        })
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
  dispatch: PropTypes.func,
  name: PropTypes.string,
  data: PropTypes.object,
  scenarios: PropTypes.array,
  updateChart: PropTypes.func
}

export default ChartGroupedBar
