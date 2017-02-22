'use strict'
import React from 'react'

class About extends React.Component {
  render () {
    return (
      <div className='page__about'>
        <section className='header__internal'>
          <div className='row'>
            <h2 className='header--xlarge'>About</h2>
          </div>
        </section>
      </div>
    )
  }
}

// Set default props
About.propTypes = {
}

export default About
