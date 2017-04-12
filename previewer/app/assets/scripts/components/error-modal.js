'use strict'
import React from 'react'
import PropTypes from 'prop-types'

export class ErrorModal extends React.Component {
  render () {
    return (
      <div>
        <div className='error-message'>
          <h1>SYNTAX ERROR:</h1>
          <p>{this.props.error}</p>
        </div>
        <div className='error-background'></div>
      </div>
    )
  }
}

ErrorModal.propTypes = {
  error: PropTypes.string
}

export default ErrorModal
