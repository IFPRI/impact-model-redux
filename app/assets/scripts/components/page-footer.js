'use strict'
import React from 'react'

class PageFooter extends React.Component {
  render () {
    return (
      <footer className='page__footer'>
        <div className='row'>
          <div className='footer__contact'>
            <h6 className='header--smallest'>Sign Up For Updates</h6>
            <span>Get updates whenever new information is added to the site.</span>
            <form className='contact__input' action='temp'>
              <input type='text' name='email' placeholder='Enter Your Email Address' />
              <input type='submit' value='Sign Up' />
            </form>
          </div>
          <a class='logo__item' target='_blank' href='http://www.ifpri.org/''>
            <img src='assets/graphics/content/iflri.png' alt='IFPRI Logo' />
          </a>
        </div>
      </footer>
    )
  }
}

export default PageFooter
