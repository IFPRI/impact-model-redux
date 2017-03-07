'use strict'
import React from 'react'

export class Loading extends React.Component {
  render () {
    return (
      <div className='loading-spinner'>
        <div className='bounce1'></div>
        <div className='bounce2'></div>
        <div className='bounce3'></div>
      </div>
    )
  }
}

export default Loading
