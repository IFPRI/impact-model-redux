'use strict'
import React from 'react'

class Home extends React.Component {
  render () {
    return (
      <section className='page__home'>
        <header className='home__header'>
          <h2>Home</h2>
        </header>
      </section>
    )
  }
}

// Set default props
Home.propTypes = {
}

export default Home
