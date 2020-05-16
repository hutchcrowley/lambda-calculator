import React from 'react'

import { operators } from '../../../utils/data'
import OperatorButton from './OperatorButton'
// import { numbers } from '../../../utils/data'

//import any components needed

const Operators = ({ char, value, handleClick, buttonOps }) => {
	return (
		<div className='operators-column'>
			{operators.map(buttonOps => {
				return <OperatorButton text={buttonOps.char} value={buttonOps.value} handleClick={handleClick} />
			})}
		</div>
	)
}

export default Operators
