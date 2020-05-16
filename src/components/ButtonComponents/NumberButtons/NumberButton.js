import React from 'react'

const NumberButton = ({ value, handleClick, text }) => {
	return (
		<button value={value} onClick={e => handleClick(e)} className='number-button' key={value}>
			{text}
		</button>
	)
}

export default NumberButton
