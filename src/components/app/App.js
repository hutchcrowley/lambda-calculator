import React, { useState } from 'react'

import Logo from '../DisplayComponents/Logo'
import Display from '../DisplayComponents/Display'
import Specials from '../ButtonComponents/SpecialButtons/Specials'
import Numbers from '../ButtonComponents/NumberButtons/Numbers'
import Operators from '../ButtonComponents/OperatorButtons/Operators'

const App = () => {
	const [ result, setResult ] = useState([])
	const [ current, setCurrent ] = useState('')

	const clear = () => {
		setResult('')
	}

	function handleClick(e) {
		e.preventDefault()
		let s = e.target.value
		setCurrent(s)
		parseCalcInput(current)
	}

	// Function to take input from button presses, parse it inot an array of numbers and operators
	function parseCalcInput(s) {
		let calculation = []
		console.log('current variable in handleClick: ', current)
		switch (current) {
			case current === '':
				console.log('currrent var in function: ', current)
				setCurrent('ERROR: invalid entry')
				calculation.toString(current)
				setCurrent('')
				setResult(current)
				break
			// case '^*/+-'.indexOf(current) > -1:
			// 	console.log('currrent var in function: ', current)
			// 	break
			case current === '-':
				setCurrent('-')
				calculation.push(current)
				setCurrent('')
				setResult([ ...result, calculation ])
				break
			case current === '+':
				setCurrent('+')
				console.log('currrent var in function: ', current)
				// temp += parseFloat(current.charAt(i))
				// setCurrent(temp)
				calculation.push(current)
				setCurrent('')
				setResult([ ...result, calculation ])
				break
			case current === 'C':
				clear()
				setResult([ ...result, calculation ])
				break
			case current === 'CE':
				calculation.pop('')
				setResult([ ...result, calculation ])
				break
			default:
				setResult([ ...result, current ])
		}
	}

	function calculate(calc) {
		// Perform a calculation expressed as an array of operators and numbers

		const ops = [
			{ '^': (a, b) => Math.pow(a, b) },
			{ '*': (a, b) => a * b, '/': (a, b) => a / b },
			{
				'+': (a, b) => a + b,
				'-': (a, b) => a - b,
			},
		]
		{
			let newCalc = []
			let currentOp = null
			for (let i = 0; i < ops.length; i++) {
				for (let j = 0; j < calc.length; j++) {
					if (ops[i][calc[j]]) {
						currentOp = ops[i[calc[j]]]
					} else if (currentOp) {
						newCalc = ([ newCalc.length - 1 ], calc[j])
						currentOp = null
					} else {
						newCalc.push(calc[j])
					}
					console.log(newCalc)
					newCalc = []
				}
				if (calc.length > 1) {
					console.log('Error: unable to resolve calculation')
					return calc
				} else return calc[0]
			}
		}
	}

	return (
		<div className='grid-container'>
			<div className='app-header-display'>
				<Logo />
				<Display result={result} />
			</div>
			<div className='specials-row'>
				<Specials handleClick={handleClick} />
			</div>
			<div className='numbers-container'>
				<Numbers handleClick={handleClick} />
			</div>
			<div className='operators-column'>
				<Operators handleClick={handleClick} />
			</div>
		</div>
	)
}

export default App
