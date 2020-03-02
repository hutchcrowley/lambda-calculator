import React from 'react'

const NumberButton = props => {
  return (
    <button className='number-button' onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

export default NumberButton
