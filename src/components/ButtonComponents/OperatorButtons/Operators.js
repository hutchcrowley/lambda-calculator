import React from 'react'
import { operators } from '../../../utils/data'
import OperatorButton from './OperatorButton'
// import { numbers } from '../../../utils/data'

//import any components needed

const Operators = props => {
  return (
    <div>
      {operators.map(buttonOps => {
        return (
          <OperatorButton
            key={
              new Date().valueOf().toString(36) +
              Math.random()
                .toString(36)
                .substr(2)
            }
            className='operator-button'
            text={buttonOps.char}
            value={buttonOps.value}
            handleClick={props.handleClick}
          />
        )
      })}
    </div>
  )
}

export default Operators
