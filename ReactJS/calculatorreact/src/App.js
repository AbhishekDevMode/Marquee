import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState("0");

  const appendValue = (val) => {
    if (input === "0" && val !== ".") {
      setInput(val);
    } else {
      setInput(prev => prev + val);
    }
  };

  const clearDisplay = () => {
    setInput("0");
  };

  const backspace = () => {
    if (input.length > 1) {
      setInput(prev => prev.slice(0, -1));
    } else {
      setInput("0");
    }
  };

  const calculate = () => {
    try {
      const result = Function(`"use strict"; return (${input})`)();
      
      if (result === Infinity || isNaN(result)) {
        setInput("Error");
      } else {
        setInput(String(result));
      }
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input}</div>
      <div className="buttons">
        <button className="btn clear" onClick={clearDisplay}>C</button>
        <button className="btn action" onClick={backspace}>⌫</button>
        <button className="btn action" onClick={() => appendValue('/')}>÷</button>
        <button className="btn action" onClick={() => appendValue('*')}>×</button>

        <button className="btn" onClick={() => appendValue('7')}>7</button>
        <button className="btn" onClick={() => appendValue('8')}>8</button>
        <button className="btn" onClick={() => appendValue('9')}>9</button>
        <button className="btn action" onClick={() => appendValue('-')}>-</button>

        <button className="btn" onClick={() => appendValue('4')}>4</button>
        <button className="btn" onClick={() => appendValue('5')}>5</button>
        <button className="btn" onClick={() => appendValue('6')}>6</button>
        <button className="btn action" onClick={() => appendValue('+')}>+</button>

        <button className="btn" onClick={() => appendValue('1')}>1</button>
        <button className="btn" onClick={() => appendValue('2')}>2</button>
        <button className="btn" onClick={() => appendValue('3')}>3</button>
        <button className="btn equal" onClick={calculate}>=</button>

        <button className="btn zero" onClick={() => appendValue('0')}>0</button>
        <button className="btn" onClick={() => appendValue('.')}>.</button>
      </div>
    </div>
  );
}

export default App;