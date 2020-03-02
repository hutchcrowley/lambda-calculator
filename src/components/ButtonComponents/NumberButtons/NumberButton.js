import React from 'react'

const NumberButton = props => {
  return (
    <button
      value={props.value}
      className='number-button'
      onClick={props.handleClick}
    >
      {props.text}
    </button>
  )
}

export default NumberButton
