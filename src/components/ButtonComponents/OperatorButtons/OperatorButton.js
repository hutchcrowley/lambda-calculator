import React from 'react'

const OperatorButton = ({ handleClick, value, text }) => {
	return (
		<button value={value} className='operator-button' onClick={e => handleClick(e)} key={value}>
			{text}
		</button>
	)
}

export default OperatorButton
