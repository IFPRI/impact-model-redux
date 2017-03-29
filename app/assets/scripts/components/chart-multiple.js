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
import { sixColorPalette, oneColorPalette } from '../constants'

export class Chart extends React.Component {
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

        // don't render the stripes till we've finished animating
        if (!this.rendered && ease !== 1) {
          return
        }
        this.rendered = true

        const helpers = ChartJS.helpers
        const meta = this.getMeta()
        const yScale = this.getScaleForId(meta.yAxisID)
        const yScaleZeroPixel = yScale.getPixelForValue(0)
        const widths = this.getDataset().width
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

            ChartJS.elements.Line.prototype.lineToNextPoint.apply({
              _chart: {
                ctx: ctx
              }
            }, [previous, point, next, null, null])
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

            ChartJS.elements.Line.prototype.lineToNextPoint.apply({
              _chart: {
                ctx: ctx
              }
            }, [previous, point, next, null, null])
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
    // const chartType = data.mark
    const chartType = 'stripe'

    let chart = {
      type: chartType,
      options: {
        responsive: true,
        animation: {
        },
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
        datasets: [{
          data: [],
          backgroundColor: sixColorPalette
        }]
      }
    }

    if (chartType === 'line' || chartType === 'stripe') {
      chart.options.responsive = true
      chart.options.maintainAspectRatio = false
      chart.options.animation.duration = 50
      chart.data.datasets[0].fill = false
      chart.data.datasets[0].borderColor = oneColorPalette
      chart.data.datasets[0].backgroundColor = 'rgba(0, 255, 0, 0.3)'
      chart.data.datasets[0].borderWidth = 4
      chart.data.datasets[0].pointBackgroundColor = '#fff'
      chart.data.datasets[0].pointBorderWidth = 2
      chart.options.scales.yAxes[0].ticks.userCallback = (value) => formatNumber(value)
      chart.options.tooltips = {callbacks: {label: (tooltipItem) => formatNumber(tooltipItem, 'yLabel')}}
    }

    const aggregation = data.encoding.x.field
    queryDatabase(data, this.props.scenarios)
    .then((chartData) => {
      chart.data.datasets[0].width = this.getStripeWidth(chartData)
      _.forEach(chartData[0].values, (item) => {
        chart.data.labels.push(translate(item[aggregation]))
        chart.data.datasets[0].data.push(item.Val)
      })
      this.chart = new ChartJS(
        document.getElementById(name).getContext('2d'),
        chart
      )
    })
  }

  updateQuery (newData) {
    const chart = []
    queryDatabase(newData, this.props.scenarios)
    .then((chartData) => {
      this.chart.data.datasets[0].width = this.getStripeWidth(chartData)
      _.forEach(chartData[0].values, (item) => {
        chart.push(item.Val)
      })
      this.chart.data.datasets[0].data = chart
      this.chart.update()
    })
  }

  getStripeWidth (chartData) {
    let positionValues = []
    for (let i = 0; i < chartData[0].values.length; i++) {
      positionValues.push(chartData.map((dataset) => {
        return dataset.values[i] ? dataset.values[i].Val : null
      }))
    }
    positionValues = positionValues.filter((value) => value)
    return positionValues.map((values) => _.max(values) - _.min(values))
    // return positionValues.reduce((a, m, i, p) => a + m / p.length)
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
        'pie-chart': chartType === 'pie' || chartType === 'doughnut' || chartType === 'polarArea',
        'line-chart': chartType === 'line'
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
        <div className='chart-container'>
          <canvas id={name} className='chart'></canvas>
        </div>
        {Dropdowns}
      </div>
    )
  }
}

Chart.propTypes = {
  name: React.PropTypes.string,
  data: React.PropTypes.object,
  scenarios: React.PropTypes.array,
  updateChart: React.PropTypes.func
}

export default Chart
