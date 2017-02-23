'use strict'
import React from 'react'
import { Link } from 'react-router'

class PageHeader extends React.Component {
  render () {
    return (
      <header>
        <div className='row'>
          <h1><Link to={'/'}>IFPRI IMPACT</Link></h1>
          <nav className='page__header'>
            <ul className='page__prime-nav'>
              <li><Link to={'/briefs'}>Briefs</Link></li>
              <li><Link to={'/scenarios'}>Scenarios</Link></li>
              <li><Link to={'/about'}>About</Link></li>
              <li><Link to={'/contact'}>Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default PageHeader
