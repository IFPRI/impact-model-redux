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
import { oneColorPalette, multiColorPalette, stripeChartFill } from '../constants'

export class ChartLine extends React.Component {
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
    let chart = {
      type: 'line',
      options: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          enabled: true,
          callbacks: {
            label: (tooltipItem) => formatNumber(tooltipItem, 'yLabel')
          }
        },
        legend: {
          display: false
        },
        animation: {
          duration: data.mark === 'stripe' ? 250 : 500
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
              userCallback: (value) => isNaN(value) || data.encoding.x.field === 'year' ? value : formatNumber(value),
              autoSkip: false,
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
    queryDatabase(data)
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
        chart.options.legend.display = false
      }
      // order according to shown
      const isSerieShown = serie => {
        return data.mark !== 'stripe' ||
        (data.series && data.series.shown &&
        data.series.shown.includes(serie[0][secondaryGrouping]))
      }
      series.sort((a, b) => isSerieShown(a) ? -1 : 1)

      series.forEach((serie, i) => {
        // determines if the line is shown
        chart.data.datasets.push({
          data: [],
          label: translate(serie[0][secondaryGrouping]) || serie[0][secondaryGrouping],
          fill: (data.mark === 'stripe' && i > 0) ? '-1' : false,
          backgroundColor: stripeChartFill,
          borderWidth: 4,
          pointBackgroundColor: '#fff',
          pointBorderWidth: 2,
          pointHitRadius: 6,
          pointRadius: 5,
          pointHoverRadius: 6
        })

        const lineColor = series.length === 1 ? oneColorPalette : multiColorPalette[i % multiColorPalette.length]
        chart.data.datasets[i].borderColor = lineColor

        // hide non-selected series for stripe
        if (!isSerieShown(serie)) {
          chart.data.datasets[i].borderColor = 'rgba(0, 0, 0, 0)'
          chart.data.datasets[i].pointBackgroundColor = 'rgba(0, 0, 0, 0)'
        }
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
        this.props.dispatch(updatePreviewerError(err))
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
        this.chart.options.legend.display = false
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
    const chartType = data.mark

    const Dropdowns = Object.keys(this.props.data)
      .filter(key => key.match(/dropdown/))
      .map(key => {
        return (
          <div key={key} className='chart-dropdown'>
            <label>{translate(this.props.data[key].field)}:</label>
            <div className='select--wrapper'>
              <select id={key} className={`${name}`} defaultValue={this.props.data[key].values[0]} onChange={this.handleDropdown}>
                {this.props.data[key].values.map((value, i) => {
                  return <option value={value} key={`${name}-${key}-${i}`}>{translate(value)}</option>
                })}
              </select>
            </div>
          </div>
        )
      })

    const chartClass = classNames(
      'figure', {
        'line-chart': chartType === 'line',
        'stripe-chart': chartType === 'stripe'
      })

    return (
      <div className={chartClass}>
        <h5 className='label--chart'>{data.title}</h5>
        <div className='chart-container'>
          <canvas id={name} className='chart'></canvas>
        </div>
        {Dropdowns}
      </div>
    )
  }
}

ChartLine.propTypes = {
  dispatch: PropTypes.func,
  name: PropTypes.string,
  data: PropTypes.object,
  updateChart: PropTypes.func
}

export default ChartLine
