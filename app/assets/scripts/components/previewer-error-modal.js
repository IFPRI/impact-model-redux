'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

export class ErrorModal extends React.Component {
  render () {
    const error = this.props.error.split('^') ? this.props.error.split('^')[0] : this.props.error
    const height = document.querySelector('.previewer__output').scrollHeight
    return (
      <div>
        <CSSTransitionGroup
          transitionName='fast-transition'
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}>
          <div className='output__error-message'>
            <h1>Syntax Error:</h1>
            <p>{error}</p>
          </div>
        </CSSTransitionGroup>
        <div className='output__error-background' style={{height: `${height}px`}}></div>
      </div>
    )
  }
}

ErrorModal.propTypes = {
  error: PropTypes.string
}

export default ErrorModal
