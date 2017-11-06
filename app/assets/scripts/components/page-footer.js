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
            <form className='contact__input' action='//ifpri.us15.list-manage.com/subscribe/post?u=475151f0c86ae50ba567b698a&amp;id=27d6c404c8' method='post'>
              <input className='input--small required email' type='email' name='EMAIL' id='mce-EMAIL' placeholder='Enter Your Email Address' />
              <button className='button button--main button--small' type='submit'>Sign Up</button>
              <div id='mce-responses' className='clear'>
                <div className='response' id='mce-error-response' style={{ display: 'none' }}></div>
                <div className='response' id='mce-success-response' style={{ display: 'none' }}></div>
              </div>
              <div style={{position: 'absolute', left: '-5000px'}} aria-hidden='true'><input type='text' name='b_475151f0c86ae50ba567b698a_27d6c404c8' tabIndex='-1' value='' /></div>
            </form>
            <p className='sub-description spacing--top'>For more information and to contact us please visit <a href='https://www.ifpri.org/program/impact-model' target='_blank'>https://www.ifpri.org/program/impact-model</a></p>
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
