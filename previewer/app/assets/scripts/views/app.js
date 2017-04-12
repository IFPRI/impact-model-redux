'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import md5 from 'browser-md5'
import _ from 'lodash'

import { parseText, updateText, updateChart, updateError } from '../actions'

// Constants
import { exampleCharts, chartTypes, multiChartTypes } from '../constants'

// Components
import ErrorModal from '../components/error-modal'
import Chart from '../components/chart'
import ChartLine from '../components/chart-line'
import ChartGroupedBar from '../components/chart-grouped-bar'

export class App extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.updateChart = this.updateChart.bind(this)
    this.handleTextInput = this.handleTextInput.bind(this)
    this.updateExample = this.updateExample.bind(this)
  }

  componentDidUpdate () {
    this.addCharts(this.props.charts, [])
  }

  componentDidMount () {
    this.props.dispatch(parseText(document.querySelector('.markdown-input').value))
  }

  addCharts (charts) {
    _.forEach(charts, (data, name) => {
      const type = data.mark
      const scenarios = data.scenarios
      if (!chartTypes.includes(type)) {
        this.props.dispatch(updateError(`"${type}" is not a valid chart type.`))
      } else if (!multiChartTypes.includes(type) && scenarios.length > 1) {
        this.props.dispatch(updateError(`"${data.mark}" chart type cannot compare multiple scenarios. Use "line" or "grouped-bar" chart types to compare scenarios, or "stripe" to draw a line chart including an area range.`))
      } else {
        const placeholder = document.querySelector('.fig-' + md5(data.title).slice(0, 12))
        if (placeholder) {
          if (type === 'stripe' || type === 'line') {
            ReactDOM.render(<ChartLine
              name={name}
              data={data}
              scenarios={scenarios}
              updateChart={this.updateChart}
              dispatch={this.props.dispatch}/>, placeholder)
          } else if (data.mark === 'grouped-bar') {
            ReactDOM.render(<ChartGroupedBar
              name={name}
              data={data}
              scenarios={scenarios}
              updateChart={this.updateChart}
              dispatch={this.props.dispatch}/>, placeholder)
          } else {
            ReactDOM.render(<Chart
              name={name}
              data={data}
              scenario={scenarios}
              updateChart={this.updateChart}
              dispatch={this.props.dispatch}/>, placeholder)
          }
        }
      }
    })
  }

  updateChart (data, id) {
    this.props.dispatch(updateChart(data, id))
  }

  handleTextInput (evt) {
    this.props.dispatch(parseText(evt.target.value))
  }

  updateExample (evt) {
    this.props.dispatch(updateText(`${this.props.text}\n\n${evt.target.value}`))
    console.log(this.props.text)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.error.length) {
      this.errorModal = <ErrorModal error={nextProps.error} />
    } else {
      this.errorModal = ''
    }
  }

  render () {
    const lines = this.props.text.split('\n')

    const Buttons = exampleCharts.map((example) => {
      return (
        <button
          className='button button--outline button--xsmall'
          key={`button-${example.type}`}
          value={example.markup}
          onClick={this.updateExample}>
            {example.displayName}
        </button>
      )
    })

    return (
      <div>
        <section className='control-module'>
          <header className='header'>
            <h1>IFPRI IMPACT</h1>
            <h2>Figure Previewer</h2>
          </header>
          <div className='buttons'>
            <h3>Add Example Markup:</h3>
            {Buttons}
          </div>
          <div className='line-numbers'>
            {lines.map((line, i) => <span key={`line-number-${i}`} />)}
          </div>
          <textarea
            className='markdown-input'
            style={{height: `${1.25 * lines.length + 1.25}rem`}}
            value={this.props.text}
            onChange={this.handleTextInput}>
          </textarea>
        </section>
        {this.errorModal}
        <section className='figure-output' dangerouslySetInnerHTML={{__html: this.props.html}}></section>
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func,
  text: PropTypes.string,
  html: PropTypes.string,
  charts: PropTypes.object,
  error: PropTypes.string
}

function mapStateToProps (state) {
  return {
    text: state.preview.text,
    html: state.preview.html,
    charts: state.preview.charts,
    maps: state.preview.maps,
    error: state.preview.error
  }
}

export default connect(mapStateToProps)(App)
