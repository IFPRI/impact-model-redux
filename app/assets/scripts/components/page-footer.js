'use strict'
import React from 'react'

export class PageFooter extends React.Component {
  render () {
    return (
      <footer className='page__footer'>
        <div className='row'>
          <div className='footer__contact'>
            <div id="mc_embed_signup">
            <form action="//ifpri.us15.list-manage.com/subscribe/post?u=475151f0c86ae50ba567b698a&amp;id=27d6c404c8" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
              <div id="mc_embed_signup_scroll">
                          <h2>Subscribe to our mailing list</h2>
            <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
            <div className="mc-field-group">
                          <label htmlFor="mce-EMAIL">Email Address<span className="asterisk">*</span>
            </label>
                          <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" />
            </div>
            <div className="mc-field-group">
                          <label htmlFor="mce-FNAME">First Name </label>
                          <input type="text" name="FNAME" className="" id="mce-FNAME" />
            </div>
            <div className="mc-field-group">
                          <label htmlFor="mce-LNAME">Last Name </label>
                          <input type="text" name="LNAME" className="" id="mce-LNAME" />
            </div>
            <div className="mc-field-group">
                          <label htmlFor="mce-MMERGE3">Organization </label>
                          <input type="text" name="MMERGE3" className="" id="mce-MMERGE3" />
            </div>
                          <div id="mce-responses" className="clear">
                                          <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                                          <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                          </div>
              <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_475151f0c86ae50ba567b698a_27d6c404c8" tabIndex="-1" value="" /></div>
              <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
              </div>
            </form>
            </div>
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
