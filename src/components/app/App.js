import React, { useState } from 'react'

import Logo from '../DisplayComponents/Logo'
import Display from '../DisplayComponents/Display'
import Specials from '../ButtonComponents/SpecialButtons/Specials'
import Numbers from '../ButtonComponents/NumberButtons/Numbers'
import Operators from '../ButtonComponents/OperatorButtons/Operators'

const App = () => {
  const [equation, setEquation] = useState([])
  const [calculation, setCalculation] = useState(null)
  const [operator, setOperator] = useState(null)
  const [calculator, setCalculator] = useState(null)
  const [result, setResult] = useState(null)
  const [evalResult, setEvalResult] = useState(null)

  const clear = () => {
    setEquation('')
    setResult('')
  }

  const handleClick = event => {
    const pressedButton = event.target.value
    console.log(pressedButton)
    if (pressedButton === 'C') {
      clear()
    } else if (
      pressedButton >= '0' ||
      pressedButton <= '9' ||
      pressedButton === '.'
    ) {
      setEquation([...equation, pressedButton])
    } else if (['+', '-', '*', '/', '%'].indexOf(pressedButton) !== -1) {
      setEquation([...equation, '', pressedButton, ''])
      setOperator(pressedButton)
    } else setCalculation(evaluate())
    console.log(calculation)
  }

  const evaluate = () => {
    try {
      const float = eval(calculation).toString()
      const answer = Number.isInteger(float) ? float : float.toFixed(2)
      console.log(answer)
      setEvalResult(answer)
    } catch (error) {
      console.log('Invalid Mathematical Equation', error)
    } finally {
      const smallAnswer = evalResult.trim()
      const finalResult = smallAnswer.substr(0, smallAnswer.length - 1)
      setResult(finalResult)
      console.log(result)
    }
    return result
  }

  console.log(equation)
  return (
    <div className='grid-container'>
      <div className='app-header-display'>
        <Logo />
        <Display equation={equation} result={result} />
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
