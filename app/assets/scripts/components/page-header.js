'use strict'
import React from 'react'
import { Link } from 'react-router'

const PageHeader = React.createClass({
  render: function () {
    return (
      <nav className='page__header'>
        <h1>IFPRI IMPACT</h1>
        <ul className='page__prime-nav'>
          <li><Link to={'/briefs'}>Briefs</Link></li>
          <li><Link to={'/scenarios'}>Scenarios</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/contact'}>Contact</Link></li>
        </ul>
      </nav>
    )
  }
})

// /////////////////////////////////////////////////////////////////// //
// Connect functions

export default PageHeader
