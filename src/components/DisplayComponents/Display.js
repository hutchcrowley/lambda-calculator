import React from 'react'
import ResultDisplay from '../DisplayComponents/ResultDisplay/ResultDisplay'
import ComputationDisplay from '../DisplayComponents/ComputationDisplay/ComputationDisplay'

const Display = props => {
  return (
    <div className='display'>
      <ResultDisplay value={props.result} />
      <ComputationDisplay value={props.equation} />
    </div>
  )
}

export default Display
