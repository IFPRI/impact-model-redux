'use strict'
import React from 'react'
import _ from 'lodash'
import ChartJS from 'chart.js'

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

  componentDidMount () {
    this.initializeChart()
  }

  initializeChart () {
    const { name, data } = this.props

    const chart = {
      type: data.mark,
      options: {
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              userCallback: (value, index, values) => formatNumber(value)
            }
          }]
        },
        tooltips: {
          callbacks: {
            label: (tooltipItem) => {
              console.log(tooltipItem)
              formatNumber(tooltipItem, 'yLabel')
            }
          }
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

    const aggregation = data.encoding.x.field
    queryDatabase(data, this.activeQuery, (chartData) => {
      _.forEach(chartData.values, (item) => {
        chart.data.labels.push(translation[item[aggregation]])
        chart.data.datasets[0].data.push(item.Val)
      })
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

    return (
      <div>
        <figcaption>
          <h3>{`${translation[data.fixed.impactparameter]} for ${translation[activeQuery]} in ${data.fixed.year.toString()}, Aggregated by ${toTitleCase(translation[data.encoding.x.field])}`}</h3>
        </figcaption>
        <canvas id={name} className={'chart-canvas'}></canvas>
          <div className='chart-dropdown'>
            <span>Filter</span>
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
