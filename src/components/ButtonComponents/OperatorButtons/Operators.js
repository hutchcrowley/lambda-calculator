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
            className='operator-button'
            text={buttonOps.char}
            value={buttonOps.char}
            onButtonPress={props.handleClick}
          />
        )
      })}
    </div>
  )
}

export default Operators
