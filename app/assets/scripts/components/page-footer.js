'use strict'
import React from 'react'

export class PageFooter extends React.Component {
  render () {
    return (
      <footer className='page__footer'>
        <div className='row'>
          <div className='footer__contact'>
            <h6 className='header--xsmall with-description'>Sign Up For Updates</h6>
            <span className='sub-description'>Get updates whenever new information is added to the site.</span>
            <form className='contact__input' action='temp'>
              <input className='input--small' type='text' name='email' placeholder='Enter Your Email Address' />
              <button className='button button--main button--small' type='submit'>Sign Up</button>
            </form>
          </div>
          <a className='footer__logo' target='_blank' href='http://www.ifpri.org/'>
            <img src='assets/graphics/content/ifpri.png' alt='IFPRI Logo' />
          </a>
        </div>
      </footer>
    )
  }
}

export default PageFooter
