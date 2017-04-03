'use strict'
import React from 'react'
import url from 'url'
import hideOnBlur from 'react-click-outside'
import { baseUrl } from '../config'
import Clipboard from 'clipboard'

export class ShareButton extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      isOpen: false
    }

    this.show = this.show.bind(this)
    this.close = this.close.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  show () {
    this.setState({ isOpen: true })
  }

  close () {
    this.setState({ isOpen: false })
  }

  handleClickOutside () {
    this.close()
  }

  componentDidMount () {
    this.clipboard = new Clipboard('#share-url-button')
  }

  componentWillUnmount () {
    if (this.clipboard && typeof this.clipboard.destroy === 'function') {
      this.clipboard.destroy()
    }
  }

  render () {
    const openClass = this.state.isOpen ? ' drop__content--open' : ''
    return (
      <div className='share--container'>
        <button className='button button--outline' onClick={this.show}>Share</button>
        {this.state.isOpen &&
          <div className={openClass}>
            <div className='form__input-group'>
              <input id='share-url-field' readOnly type='text' className='form__control form__control--medium' value={url.resolve(baseUrl, '#' + this.props.path)}/>
              <span className='form__input-group-button'>
                <button type='submit' className='button button--outline button--internal' data-clipboard-target='#share-url-field' id='share-url-button'>
                  <span>Copy Link</span>
                </button>
              </span>
              <button className='modal__button-dismiss' title='close' onClick={this.close}>Close</button>
            </div>
        </div>}
      </div>
    )
  }
}

ShareButton.propTypes = {
  path: React.PropTypes.string
}

module.exports = hideOnBlur(ShareButton)
