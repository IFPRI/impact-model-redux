'use strict'
import React from 'react'
import { Link } from 'react-router'

const PageFooter = React.createClass({
  render: function () {
    return (
      <div className='page__footer'>
        <div className='contact'>
          <p className='contact__item'><span>Copyright IFPRI 2017. </span> <Link to={'/contact'}>Contact Us</Link></p>
        </div>
      </div>
    )
  }
})

export default PageFooter
