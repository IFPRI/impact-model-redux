'use strict'
import React from 'react'

export class UhOh extends React.Component {
  render () {
    return (
      <section className='section__padding page__uhoh'>
        <div className='row'>
          <h2>404</h2>
          <p>You're seaching for something that doesn't exist...</p>
        </div>
      </section>
    )
  }
}

// /////////////////////////////////////////////////////////////////// //
// Connect functions

export default UhOh
