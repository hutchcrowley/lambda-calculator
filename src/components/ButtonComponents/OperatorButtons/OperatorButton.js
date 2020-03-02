import React from 'react'

const OperatorButton = props => {
  return (
    <>
      <button
        value={props.value}
        className='operator-button'
        onClick={props.handleClick}
      >
        {props.text}
      </button>
    </>
  )
}

export default OperatorButton
