import React, { useState } from 'react'

import Logo from '../DisplayComponents/Logo'
import Display from '../DisplayComponents/Display'
import Specials from '../ButtonComponents/SpecialButtons/Specials'
import Numbers from '../ButtonComponents/NumberButtons/Numbers'
import Operators from '../ButtonComponents/OperatorButtons/Operators'

const App = () => {
  const [equation, setEquation] = useState('')
  const [result, setResult] = useState('')

  const handleClick = event => {
    const pressedButton = event.target.value
    console.log(pressedButton)
    let question = pressedButton
    setEquation(question)
    if (pressedButton === 'C') {
      clear()
    } else if (
      setEquation(pressedButton >= '0' && pressedButton <= '9') ||
      setEquation(pressedButton === '.')
    ) {
      setEquation((question += pressedButton))
    } else if (['+', '-', '*', '/', '%'].indexOf(pressedButton) !== -1) {
      setEquation((question += '' + pressedButton + ''))
    } else if (pressedButton === '=') {
      try {
        const evalResult = eval(equation).toString()
        const answer = Number.isInteger(evalResult)
          ? evalResult
          : evalResult.toFixed(2)
        setResult(answer)
      } catch (error) {
        console.log('Invalid Mathematical Equation', error)
      }
    } else {
      console.log(equation)
      question = question.trim()
      question = question.substr(0, question.length - 1)
      setEquation(question)
    }
  }

  const clear = () => {
    setEquation('')
    setResult('')
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
