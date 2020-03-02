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
            key={
              new Date().valueOf().toString(36) +
              Math.random()
                .toString(36)
                .substr(2)
            }
            className='specical-button'
            text={buttonSpecs}
            value={buttonSpecs}
            handleClick={props.handleClick}
          />
        )
      })}
    </div>
  )
}

export default Specials
