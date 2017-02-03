'use strict'
import React from 'react'

const PageFooter = React.createClass({
  render: function () {
    return (
      <footer className='page__footer'>
        <div className='footer__contact'>
          <div className='contact__text'>
            <h2>Sign Up For Updates</h2>
            <p>Get updates whenever new information is added to the site.</p>
          </div>
          <div className='contact__input'>
            <form action='temp'>
              <input type='text' name='email' placeholder='Enter Your Email Address' />
              <input type='submit' value='Sign Up' />
            </form>
          </div>
        </div>
        <div className='footer__logo'>
          logo
        </div>
      </footer>
    )
  }
})

export default PageFooter
