'use strict'
import React from 'react'
import { Link } from 'react-router'
import c from 'classnames'

import { toTitleCase } from '../utils/format'

export class PageHeader extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      mobileMenuOpen: false
    }
    this.mobileMenuClick = this.mobileMenuClick.bind(this)
    this.documentListener = this.documentListener.bind(this)
  }

  documentListener (e) {
    if (e.preventClose !== true && this.state.mobileMenuOpen) {
      this.setState({mobileMenuOpen: false})
    }
  }

  mobileMenuClick (e) {
    e.preventDefault()
    this.setState({mobileMenuOpen: !this.state.mobileMenuOpen})
  }

  onNavDataClick (e) {
    // When clicking a nav block, add a property to the event indicating that
    // the block shouldn't be toggled on body click.
    e.preventClose = true
  }

  componentDidMount () {
    document.addEventListener('click', this.documentListener)
    this.navData.addEventListener('click', this.onNavDataClick)
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.documentListener)
    this.navData.removeEventListener('click', this.onNavDataClick)
  }

  render () {
    const { page } = this.props
    // const links = ['briefs', 'scenarios', 'about', 'contact']
    const links = ['briefs', 'about', 'contact']
    return (
      <header className='page__header'>
        <div className='row' ref={v => (this.navData = v)}>
          <h1><Link to={'/'}>IFPRI IMPACT</Link></h1>
          <Link className='mobile-menu' onClick={this.mobileMenuClick} to={'/'}><span>Menu</span></Link>
          <nav className={c('nav__main', { active: this.state.mobileMenuOpen })}>
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
