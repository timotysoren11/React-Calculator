import { useState } from 'react';
import './App.css';
import Button from './Components/Button';
import Input from './Components/Input';

import * as Math from 'mathjs';
// Main App 
const App = () => {
   
  // using useState 
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  //Adding the text
  const addToText = (val) =>{
    setText((text) =>[...text, val + ""]);
  };

  const calculateResult = () =>{
    const input = text.join("");
    setResult(Math.evaluate(input));
  };

  const resetText = () =>{
    setText("");
    setResult("");
  };

 
  const buttonColor = "#f2a33c";

  return (
    <div className='App-container'>
      <div className='calc-wrapper'>
        <Input text={text} result={result}/>
        <div className='raw'>
          <Button symbols="7" handleClick={addToText}/>
          <Button symbols="8" handleClick={addToText}/>
          <Button symbols="9" handleClick={addToText}/>
          <Button symbols="/" color={buttonColor} handleClick={addToText}/>
        </div>
        <div className='raw'>
          <Button symbols="4" handleClick={addToText}/>
          <Button symbols="5" handleClick={addToText}/>
          <Button symbols="6" handleClick={addToText}/>
          <Button symbols="*" color={buttonColor} handleClick={addToText}/>
        </div>
        <div className='raw'>
          <Button symbols="1" handleClick={addToText}/>
          <Button symbols="2" handleClick={addToText}/>
          <Button symbols="3" handleClick={addToText}/>
          <Button symbols="+" color={buttonColor} handleClick={addToText}/>
        </div>
        <div className='raw'>
          <Button symbols="0" handleClick={addToText}/>
          <Button symbols="." handleClick={addToText}/>
          <Button symbols="=" handleClick={calculateResult}/>
          <Button symbols="-" color={buttonColor} handleClick={addToText}/>
        </div>
        <Button symbols="Clear" color="red" handleClick={resetText}/>
      </div>
    </div>
  );
}

export default App;
