import React from 'react'
import { specials } from '../../../utils/data'
import SpecialButton from './SpecialButton'
//import any components needed

const Specials = props => {
  return (
    <div className='specials-button'>
      {specials.map(buttonSpecs => {
        return (
          <SpecialButton
            className='specical-button'
            text={buttonSpecs}
            value={buttonSpecs}
            onButtonPress={props.handleClick}
          />
        )
      })}
    </div>
  )
}

export default Specials
