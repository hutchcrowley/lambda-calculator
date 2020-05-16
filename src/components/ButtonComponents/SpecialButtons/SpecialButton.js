import React from 'react'

const SpecialButton = ({ handleClick, value, text }) => {
	return (
		<button value={value} className='specical-button' onClick={e => handleClick(e)} key={value}>
			{text}
		</button>
	)
}
export default SpecialButton
