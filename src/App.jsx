import React, { useState } from 'react'
import styles from './App.module.css'
import Display from './components/Display'
import ButtonsContainer from './components/ButtonsContainer'

function App() {
  const [calVal, setcalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if(buttonText === 'C'){
      setcalVal("");
    } else if(buttonText === '='){
      const result = eval(calVal);
      setcalVal(result);
    } else{
      const newDisplayValue = calVal + buttonText;
      setcalVal(newDisplayValue);
    }
  }
  return <div className={styles.calculator}>
    <Display displayValue={calVal} />
    <ButtonsContainer onButtonClick={onButtonClick} />
  </div>

}

export default App