'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import md5 from 'browser-md5'
import _ from 'lodash'

import { parseText, updateChart } from '../actions'

// Constants
import { defaultText } from '../constants'

// Components
import Chart from '../components/chart'
// import ChartStripe from '../components/chart-stripe'

export class App extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.updateChart = this.updateChart.bind(this)
    this.handleTextUpdate = this.handleTextUpdate.bind(this)
    this.state = {
      inputText: defaultText
    }
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
        if (data.mark === 'stripe') {
          ReactDOM.render(<ChartStripe name={name} data={data} scenarios={scenarios} updateChart={this.updateChart}/>, placeholder)
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
    return (
      <div>
        <section className='header'>
          <h1>IFPRI IMPACT</h1>
          <h2>Figure Previewer</h2>
        </section>
        <section className='body'>
          <textarea className='markdown-input' defaultValue={this.state.inputText} onInput={this.handleTextUpdate}></textarea>
          {this.props.error.length
            ? (
            <div>
              <div className='error-message'>
                <h1>SYNTAX ERROR:</h1>
                <p>{this.props.error}</p>
              </div>
              <div className='error-background'></div>
            </div>
            )
            : ''}
          <section className='figure-output' dangerouslySetInnerHTML={{__html: this.props.text}}></section>
      </section>
      </div>
    )
  }
}

App.propTypes = {
  dispatch: React.PropTypes.func,
  text: React.PropTypes.string,
  charts: React.PropTypes.object,
  error: React.PropTypes.string
}

function mapStateToProps (state) {
  return {
    text: state.preview.text,
    charts: state.preview.charts,
    maps: state.preview.maps,
    error: state.preview.error
  }
}

export default connect(mapStateToProps)(App)
