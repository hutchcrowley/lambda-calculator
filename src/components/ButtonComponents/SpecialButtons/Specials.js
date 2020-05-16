import React from 'react'

import { specials } from '../../../utils/data'
import SpecialButton from './SpecialButton'
//import any components needed

const Specials = props => {
	return (
		<div className='specials-row'>
			{specials.map(value => {
				return <SpecialButton text={value} value={value} handleClick={props.handleClick} key={value} />
			})}
		</div>
	)
}

export default Specials
