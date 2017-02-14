'use strict'
import React from 'react'

class About extends React.Component {
  render () {
    return (
      <div className='page__about'>
        <header className='about__header'>
          <h2>About</h2>
        </header>
      </div>
    )
  }
}

// Set default props
About.propTypes = {
}

export default About
