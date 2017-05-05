'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ReactTooltip from 'react-tooltip'
import _ from 'lodash'

import {
  parsePreviewerText,
  updatePreviewerText,
  updatePreviewerChart,
  updatePreviewerError } from '../actions'

// Constants
import {
  examplePreviewerCharts,
  chartTypes,
  multiChartTypes } from '../constants'

// Components
import ErrorModal from '../components/previewer-error-modal'
import Chart from '../components/chart'
import ChartLine from '../components/chart-line'
import ChartGroupedBar from '../components/chart-grouped-bar'

export class App extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.updatePreviewerChart = this.updatePreviewerChart.bind(this)
    this.handleTextInput = this.handleTextInput.bind(this)
    this.updateExample = this.updateExample.bind(this)
  }

  componentDidUpdate () {
    this.addCharts(this.props.charts, [])
  }

  componentDidMount () {
    this.props.dispatch(parsePreviewerText(document.querySelector('.control-module__markdown-input').value))
  }

  addCharts (charts) {
    _.forEach(charts, (data, name) => {
      const type = data.mark
      const scenarios = data.scenarios
      if (!chartTypes.includes(type)) {
        this.props.dispatch(updatePreviewerError(`"${type}" is not a valid chart type.`))
      } else if (!multiChartTypes.includes(type) && scenarios.length > 1) {
        this.props.dispatch(updatePreviewerError(`"${data.mark}" chart type cannot compare multiple scenarios. Use "line" or "grouped-bar" chart types to compare scenarios, or "stripe" to draw a line chart including an area range.`))
      } else {
        const placeholder = document.querySelector(`.${data.id}`)
        if (placeholder) {
          if (type === 'stripe' || type === 'line') {
            ReactDOM.render(<ChartLine
              name={name}
              data={data}
              scenarios={scenarios}
              updateChart={this.updatePreviewerChart}
              dispatch={this.props.dispatch}/>, placeholder)
          } else if (data.mark === 'grouped-bar') {
            ReactDOM.render(<ChartGroupedBar
              name={name}
              data={data}
              scenarios={scenarios}
              updateChart={this.updatePreviewerChart}
              dispatch={this.props.dispatch}/>, placeholder)
          } else {
            ReactDOM.render(<Chart
              name={name}
              data={data}
              scenario={scenarios}
              updateChart={this.updatePreviewerChart}
              dispatch={this.props.dispatch}/>, placeholder)
          }
        }
      }
    })
  }

  updatePreviewerChart (data, id) {
    this.props.dispatch(updatePreviewerChart(data, id))
  }

  handleTextInput (evt) {
    this.props.dispatch(parsePreviewerText(evt.target.value))
  }

  updateExample (evt) {
    const newText = `${this.props.text}\n${evt.target.value}`
    this.props.dispatch(updatePreviewerText(newText))
    this.props.dispatch(parsePreviewerText(newText))
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
    const Buttons = examplePreviewerCharts.map((example) => {
      return (
        <button
          className='button button--control-palette button--xsmall'
          key={`button-${example.type}`}
          data-tip={example.description}
          value={`\n### ${example.displayName}\n${example.description}\n${example.markup}`}
          onClick={this.updateExample}>
            {example.displayName}
        </button>
      )
    })

    return (
      <section className='page__previewer'>
          <header className='header__internal header__internal--sm'>
            <div className='row row--short browse__header-text'>
              <h2 className='header--xxlarge with-metadata'>Syntax Playground</h2>
            </div>
          </header>
          <div className='row'>
            <section className='section__internal section__padding'>
              <div className='previewer__split-left'>
                <section className='previewer__control-module'>
                  <header className='control-module__header'>
                    <h1>IFPRI IMPACT</h1>
                    <h2>Figure Previewer</h2>
                  </header>
                  <div className='control-module__buttons'>
                    <h3>Add example markup:</h3>
                    <ReactTooltip />
                    {Buttons}
                  </div>
                  <div className='control-module__line-numbers'>
                    {lines.map((line, i) => <span key={`line-number-${i}`} />)}
                  </div>
                  <textarea
                    className='control-module__markdown-input'
                    style={{height: `${1.25 * lines.length + 1.25}rem`}}
                    value={this.props.text}
                    onChange={this.handleTextInput}>
                  </textarea>
                </section>
              </div>
              <div className='previewer__split--right'>
                {this.errorModal}
                <section className='previewer__output'
                  dangerouslySetInnerHTML={{__html: this.props.html}}>
                </section>
              </div>
            </section>
        </div>
      </section>
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
    text: state.previewer.text,
    html: state.previewer.html,
    charts: state.previewer.charts,
    error: state.previewer.error
  }
}

export default connect(mapStateToProps)(App)
