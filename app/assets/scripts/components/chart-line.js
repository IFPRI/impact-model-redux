'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import _ from 'lodash'
if (typeof window === 'undefined') global.window = {}
const ChartJS = require('chart.js')

// Actions
import { updateError } from '../actions'

// Utils
import { formatNumber } from '../utils/format'
import { translate } from '../utils/translation'
import queryDatabase from '../utils/query-database'

// Constants
import { oneColorPalette, fourteenColorPalette, stripeChartFill } from '../constants'
const DEFAULT_SCENARIO = ['SSP2_GFDL']

export class ChartLine extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.initializeChart = this.initializeChart.bind(this)
    this.updateQuery = this.updateQuery.bind(this)
    this.handleDropdown = this.handleDropdown.bind(this)
  }

  componentDidMount () {
    ChartJS.defaults.stripe = ChartJS.helpers.clone(ChartJS.defaults.line)
    ChartJS.controllers.stripe = ChartJS.controllers.line.extend({
      draw: function (ease) {
        const result = ChartJS.controllers.line.prototype.draw.apply(this, arguments)
        const widths = this.getDataset().width

        const isStripe = this.getDataset().lineType === 'stripe'
        if (!isStripe || !widths) {
          return
        }
        this.rendered = true

        const helpers = ChartJS.helpers
        const meta = this.getMeta()
        const yScale = this.getScaleForId(meta.yAxisID)
        const yScaleZeroPixel = yScale.getPixelForValue(0)
        const ctx = this.chart.chart.ctx

        ctx.save()
        ctx.fillStyle = this.getDataset().backgroundColor
        ctx.lineWidth = 1
        ctx.beginPath()

        // initialize the data and bezier control points for the top of the stripe
        helpers.each(meta.data, (point, index) => {
          point._view.y += (yScale.getPixelForValue(widths[index]) - yScaleZeroPixel)
        })
        ChartJS.controllers.line.prototype.updateBezierControlPoints.apply(this)

        // draw the top of the stripe
        helpers.each(meta.data, (point, index) => {
          if (index === 0) {
            ctx.moveTo(point._view.x, point._view.y)
          } else {
            const previous = helpers.previousItem(meta.data, index)
            const next = helpers.nextItem(meta.data, index)

            ctx.lineTo(
              ctx, previous, next, null)
          }
        })

        // revert the data for the top of the stripe
        // initialize the data and bezier control points for the bottom of the stripe
        helpers.each(meta.data, (point, index) => {
          point._view.y -= 2 * (yScale.getPixelForValue(widths[index]) - yScaleZeroPixel)
        })
        // we are drawing the points in the reverse direction
        meta.data.reverse()
        ChartJS.controllers.line.prototype.updateBezierControlPoints.apply(this)

        // draw the bottom of the stripe
        helpers.each(meta.data, (point, index) => {
          if (index === 0) {
            ctx.lineTo(point._view.x, point._view.y)
          } else {
            const previous = helpers.previousItem(meta.data, index)
            const next = helpers.nextItem(meta.data, index)

            ctx.lineTo(ctx, previous, next, null)
          }
        })

        // revert the data for the bottom of the stripe
        meta.data.reverse()
        helpers.each(meta.data, (point, index) => {
          point._view.y += (yScale.getPixelForValue(widths[index]) - yScaleZeroPixel)
        })
        ChartJS.controllers.line.prototype.updateBezierControlPoints.apply(this)

        ctx.stroke()
        ctx.closePath()
        ctx.fill()
        ctx.restore()

        return result
      }
    })

    this.initializeChart()
  }

  initializeChart () {
    const { name, data } = this.props
    let chart = {
      type: data.mark,
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

    const scenarios = data.scenarios || DEFAULT_SCENARIO
    queryDatabase(data, scenarios)
    .then((chartData) => {
      scenarios.forEach((scenario, i) => {
        chart.data.datasets.push({
          data: [],
          label: scenario,
          fill: false,
          borderWidth: 4,
          pointBackgroundColor: '#fff',
          pointBorderWidth: 2,
          pointHitRadius: 6,
          pointRadius: 5,
          pointHoverRadius: 6
        })

        const lineColor = scenarios.length === 1
          ? oneColorPalette
          : fourteenColorPalette[i] || fourteenColorPalette[(Math.floor(Math.random() * 13))]
        chart.data.datasets[i].borderColor = lineColor
        const aggregation = data.encoding.x.field
        const primaryLine = _.find(chartData, {'source': scenarios[i]})
        _.forEach(primaryLine.values, (item) => {
          if (i === 0) {
            chart.data.labels.push(translate(item[aggregation]) || item[aggregation])
          }
          chart.data.datasets[i].data.push(item.Val)
        })
      })

      if (data.mark === 'stripe') {
        chart = this.addStripe(chart, chartData, scenarios)
      }
      try {
        this.chart = new ChartJS(
          document.getElementById(name).getContext('2d'),
          chart
        )
      } catch (err) {
        this.props.dispatch(updateError(err))
      }

      // for stripe chart type, disable tooltips over the area's centerline
      const originalGetElementAtEvent = this.chart.getElementAtEvent
      this.chart.getElementAtEvent = function () {
        return originalGetElementAtEvent.apply(this, arguments).filter((e) => {
          if (e._datasetIndex !== chartData.length) {
            return true
          }
        })
      }
    })
  }

  updateQuery (newData) {
    // copy original to minimize restyling
    const nextData = Object.assign({}, this.chart.data.datasets)
    const data = this.props.data
    const scenarios = data.scenarios || DEFAULT_SCENARIO
    queryDatabase(newData, scenarios)
    .then((chartData) => {
      _.forEach(nextData, (dataset) => {
        dataset.data = []
      })

      scenarios.forEach((scenario, i) => {
        const primaryLine = _.find(chartData, {'source': scenarios[i]})
        _.forEach(primaryLine.values, (item) => {
          nextData[i].data.push(item.Val)
        })
      })

      if (newData.mark === 'stripe') {
        const stripe = this.getStripeParams(chartData)
        nextData[scenarios.length].width = stripe.width
        nextData[scenarios.length].data = stripe.centerline
      }

      this.chart.update()
    })
  }

  addStripe (chart, chartData, scenarios) {
    chart.data.datasets.push({
      fill: false,
      backgroundColor: stripeChartFill,
      borderColor: 'rgba(0, 0, 0, 0)',
      pointRadius: 0,
      pointHoverBackgroundColor: 'rgba(0, 0, 0, 0)',
      pointHitRadius: 0,
      label: 'Range, All Scenarios',
      lineType: 'stripe'
    })
    const stripe = this.getStripeParams(chartData)
    chart.data.datasets[scenarios.length].width = stripe.width
    chart.data.datasets[scenarios.length].data = stripe.centerline

    return chart
  }

  getStripeParams (chartData) {
    let positionValues = []
    for (let i = 0; i < chartData[0].values.length; i++) {
      positionValues.push(chartData.map((dataset) => {
        return dataset.values[i] ? dataset.values[i].Val : null
      }))
    }
    positionValues = positionValues.filter((value) => value)
    const lineWidth = positionValues.map((values) => _.max(values) - _.min(values))
    const centerline = positionValues.map((group) => {
      return group.reduce((a, b) => a + b) / group.length
    })
    return {
      width: lineWidth,
      centerline: centerline
    }
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
