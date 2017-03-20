'use strict'
import React from 'react'
import { Link } from 'react-router'

import { toTitleCase } from '../utils/format'

export class PageHeader extends React.Component {
  render () {
    const { page } = this.props
    const links = ['briefs', 'scenarios', 'about', 'contact']
    return (
      <header className='page__header'>
        <div className='row'>
          <h1><Link to={'/'}>IFPRI IMPACT</Link></h1>
          <Link className='mobile-menu' to={'#'}><span>Menu</span></Link>
          <nav className='nav__main'>
            <ul className='page__prime-nav'>
              {links.map(link => <li key={link} className={page === link ? 'active' : ''}><Link to={`/${link}`}>{toTitleCase(link)}</Link></li>)}
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

PageHeader.propTypes = {
  page: React.PropTypes.string
}

export default PageHeader
