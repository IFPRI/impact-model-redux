'use strict'
import React from 'react'

const PageFooter = React.createClass({
  displayName: 'PageFooter',

  render: function () {
    return (
      <div className='page__footer'>
        <div className='contact'>
          <p className='contact__item'><span>Copyright IFPRI 2017. </span> <a title='contact us' href='mailto:' className='link--primary'>Contact Us</a></p>
        </div>
      </div>
    )
  }
})

// /////////////////////////////////////////////////////////////////// //
// Connect functions

export default PageFooter
