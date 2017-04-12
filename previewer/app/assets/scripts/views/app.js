'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import md5 from 'browser-md5'
import _ from 'lodash'

import { parseText, updateChart } from '../actions'

// Constants
import { defaultText } from '../constants'

// Components
import ErrorModal from '../components/error-modal'
import Chart from '../components/chart'
import ChartLine from '../components/chart-line'
import ChartGroupedBar from '../components/chart-grouped-bar'

export class App extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.updateChart = this.updateChart.bind(this)
    this.handleTextUpdate = this.handleTextUpdate.bind(this)
  }

  componentDidUpdate () {
    this.addCharts(this.props.charts, [])
  }

  componentDidMount () {
    this.props.dispatch(parseText(document.querySelector('.markdown-input').value))
  }

  addCharts (charts) {
    _.forEach(charts, (data, name) => {
      const scenarios = ['SSP2_GFDL', 'SSP2_HGEM']
      const placeholder = document.querySelector('.fig-' + md5(data.title).slice(0, 12))
      if (placeholder) {
        if (data.mark === 'stripe' || data.mark === 'line') {
          ReactDOM.render(<ChartLine name={name} data={data} scenarios={scenarios} updateChart={this.updateChart}/>, placeholder)
        } else if (data.mark === 'grouped-bar') {
          ReactDOM.render(<ChartGroupedBar name={name} data={data} scenarios={scenarios} updateChart={this.updateChart}/>, placeholder)
        } else {
          ReactDOM.render(<Chart name={name} data={data} scenario={scenarios} updateChart={this.updateChart}/>, placeholder)
        }
      }
    })
  }

  updateChart (data, id) {
    this.props.dispatch(updateChart(data, id))
  }

  handleTextUpdate (evt) {
    this.props.dispatch(parseText(evt.target.value))
  }

  render () {
    const lines = this.props.text.split('\n')
    return (
      <div>
        <section className='control-module'>
          <header className='header'>
            <h1>IFPRI IMPACT</h1>
            <h2>Figure Previewer</h2>
          </header>
          <div className='line-numbers'>
            {lines.map((line, i) => <span key={`line-number-${i}`} />)}
          </div>
          <textarea
            className='markdown-input'
            style={{height: `${1.25 * lines.length + 1.25}rem`}}
            defaultValue={defaultText}
            onInput={this.handleTextUpdate}>
          </textarea>
        </section>
        {this.props.error.length
          ? <ErrorModal error={this.props.error} />
          : ''}
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
