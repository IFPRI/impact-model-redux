'use strict'
import React from 'react'
import marked from 'marked'
import fm from 'front-matter'

// Utils
// import { setupRenderer } from '../utils/parse-figures'

// Constants
import { defaultText } from '../constants'

// Components
// import Chart from '../components/chart'
// import ChartStripe from '../components/chart-stripe'

export class App extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.handleTextUpdate = this.handleTextUpdate.bind(this)
    this.state = {
      inputText: defaultText,
      placeholder: ''
    }
  }

  handleTextUpdate (evt) {
    // const renderer = setupRenderer()
    const input = evt.target.value
    const figureData = marked(fm(input).body)
    this.setState({placeholder: figureData})
  }

  render () {
    return (
      <div>
        <section className='header'>
          <h1>IFPRI IMPACT</h1>
          <h2>Figure Previewer</h2>
        </section>
        <section className='body'>
          <textarea id='markdown-input' defaultValue={this.state.inputText} onInput={this.handleTextUpdate}></textarea>
          <section id='figure-output' dangerouslySetInnerHTML={{__html: this.state.placeholder}}></section>
      </section>
      </div>
    )
  }
}

export default App
