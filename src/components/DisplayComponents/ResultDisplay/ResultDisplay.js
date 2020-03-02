import React from 'react'

const ResultDisplay = props => {
  console.log(props.value)
  return <div className='result-display'>{props.value}</div>
}

export default ResultDisplay
