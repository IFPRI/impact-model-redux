'use strict'
import React from 'react'

class Home extends React.Component {
  render () {
    return (
      <div className='page__home'>
        <header className='home__header'>
          <h2>Home</h2>
        </header>
      </div>
    )
  }
}

// Set default props
Home.propTypes = {
}

export default Home
