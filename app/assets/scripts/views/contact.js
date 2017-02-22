'use strict'
import React from 'react'

class Contact extends React.Component {
  render () {
    return (
      <div className='page__contact'>
        <section className='header__internal'>
          <div className='row'>
            <h2 className='header--xlarge'>Contact Us</h2>
          </div>
        </section>
      </div>
    )
  }
}

// Set default props
Contact.propTypes = {
}

export default Contact
