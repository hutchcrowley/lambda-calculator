import React from 'react'

const SpecialButton = props => {
  return (
    <button className='specical-button' onClick={props.handleClick}>
      {props.text}
    </button>
  )
}
export default SpecialButton
