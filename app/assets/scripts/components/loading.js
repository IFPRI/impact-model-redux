import React from 'react'

export default class Loading extends React.Component {
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
