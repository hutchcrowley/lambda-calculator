import React from 'react'

import { numbers } from '../../../utils/data'
import NumberButton from './NumberButton'
//import any components needed

const Numbers = props => {
	return (
		<div className='numbers-container'>
			{numbers.map(buttonNums => {
				return <NumberButton text={buttonNums} value={buttonNums} handleClick={props.handleClick} />
				// using this syntax, I'm passing to props an object which takes the stateful data on buttonNumbers, which I brought in from the data.js file using the useState hook. The props can then be invoked on the child element using the syntax props.text or props.key.
			})}
		</div>
	)
}
export default Numbers
