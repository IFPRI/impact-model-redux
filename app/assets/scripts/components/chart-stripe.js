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
import { oneColorPalette, sixColorPalette, stripeChartFill } from '../constants'

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
    let { name, data } = this.props

    let chart = {
      type: 'stripe',
      options: {
        responsive: false,
        maintainAspectRatio: false,
        tooltips: {
          enabled: true,
          userCallback: (value) => formatNumber(value)
        },
        legend: {
          display: false
        },
        animation: {
          duration: 50
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

    const aggregation = data.encoding.x.field
    queryDatabase(data)
    .then((chartData) => {
      const scenarios = data.scenarios
      const stripe = this.getStripeParams(chartData)
      console.log(chartData)
      chart.data.datasets.push({
        fill: false,
        backgroundColor: stripeChartFill,
        borderColor: 'rgba(0, 0, 0, 0)',
        pointRadius: 0,
        pointHitRadius: 0
      })
      chart.data.datasets[0].width = stripe.width
      chart.data.datasets[0].data = stripe.centerline

      scenarios.forEach((scenario, i) => {
        chart.data.datasets.push({
          data: [],
          fill: false,
          borderWidth: 4,
          pointBackgroundColor: '#fff',
          pointBorderWidth: 2,
          width: []
        })
        const lineColor = sixColorPalette[i] || sixColorPalette[(Math.floor(Math.random() * 5))]
        chart.data.datasets[i + 1].borderColor = lineColor
        const primaryLine = _.find(chartData, {'source': data.scenarios[i]})
        _.forEach(primaryLine.values, (item) => {
          if (i === 0) {
            chart.data.labels.push(translate(item[aggregation]))
          }
          chart.data.datasets[i + 1].data.push(item.Val)
        })
      })
      console.log(chart)
      // Calculate area dimensions
      // Currently pretending there is only one primary line per article,
      // though the simulated articles currently include all scenarios
      // for (let i = 0; i < data.scenarios.length; i++) {
      //   console.log(chartData)
        // if (i === 0) {
        //   chart.data.datasets[0].width = this.getStripeWidth(chartData)
        // }

      //   chart.data.datasets.push({
      //     data: [],
      //     fill: false,
      //     borderColor: oneColorPalette,
      //     backgroundColor: stripeChartFill,
      //     borderWidth: 4,
      //     pointBackgroundColor: '#fff',
      //     pointBorderWidth: 2
      //   })
      //   // chart.data.datasets.push(JSON.parse(JSON.stringify(styleTemplate)))
      //   // chart.data.datasets.push({data: []})
      //   const primaryLine = _.find(chartData, {'source': data.scenarios[i]})
      //   // data.scenarios.forEach((scenario, i) => {
      //     // chart.data.datasets.push({data: []})
      //     // const primaryLine = _.find(chartData, {'source': scenario})
      //     _.forEach(primaryLine.values, (item) => {
      //       if (i === 0) {
      //         chart.data.datasets[0].width = this.getStripeWidth(chartData)
      //         chart.data.labels.push(translate(item[aggregation]))
      //       }
      //       // console.log(i, primaryLine.values)
      //       // if (i === 0) {
      //       //   chart.data.labels.push(translate(item[aggregation]))
      //       // }
      //       // console.log(item.Val)
      //
      //     })
      //   // })
      // }
      // console.log(chart)

      // for (let line = 0; line < 4; line++) {
      //   const y = [];
      //   chart.datasets.push({}); //create a new line dataset
      //   const dataset = chart.datasets[line]
      //   dataset.data = []; //contains the 'Y; axis data
      //   // for (x = 0; x < 10; x++) {
      //   const primaryLine = _.find(chartData, {'source': data.scenarios[line]})
      //   primaryLine.forEach()
      //       y.push(line + x); //push some data aka generate 4 distinct separate lines
      //       if (line === 0)
      //           lineChartData.labels.push(x); //adds x axis labels
      //     // } //for x
      //
      //     lineChartData.datasets[line].data = y; //send new line data to dataset
      // } // for line


      // data.scenarios.forEach((scenario, i) => {
      //   chart.data.datasets.push({data: []})
      //   const primaryLine = _.find(chartData, {'source': scenario})
      //   _.forEach(primaryLine.values, (item) => {
      //     console.log(item)
      //     chart.data.labels.push(translate(item[aggregation]))
      //     chart.data.datasets[i].data.push(item.Val)
      //   })
      // })

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

Chart.propTypes = {
  name: React.PropTypes.string,
  data: React.PropTypes.object,
  scenarios: React.PropTypes.array,
  updateChart: React.PropTypes.func
}

export default Chart
