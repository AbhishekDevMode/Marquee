import { useState } from 'react';
import './Calculator.css';

export default function Calculator() {
  const [displayValue, setDisplayValue] = useState("0");

  const handlePress = (val) => {
    if (displayValue === "0" && val !== ".") {
      setDisplayValue(val);
    } else {
      setDisplayValue(prev => prev + val);
    }
  };
  
  const computeResult = () => {
    try {
      const result = Function(`"use strict"; return (${displayValue})`)();
      setDisplayValue(result === Infinity || isNaN(result) ? "Error" : String(result));
    } catch {
      setDisplayValue("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="buttons">
        <button className="btn clear" onClick={() => setDisplayValue("0")}>C</button>
        <button className="btn action" onClick={() => setDisplayValue(prev => prev.length > 1 ? prev.slice(0, -1) : "0")}>⌫</button>
        <button className="btn action" onClick={() => handlePress('/')}>÷</button>
        <button className="btn action" onClick={() => handlePress('*')}>×</button>

        {['7', '8', '9'].map(num => <button key={num} className="btn" onClick={() => handlePress(num)}>{num}</button>)}
        <button className="btn action" onClick={() => handlePress('-')}>-</button>

        {['4', '5', '6'].map(num => <button key={num} className="btn" onClick={() => handlePress(num)}>{num}</button>)}
        <button className="btn action" onClick={() => handlePress('+')}>+</button>

        <div className="lower-grid">
          <div className="numbers-left">
            {['1', '2', '3'].map(num => <button key={num} className="btn" onClick={() => handlePress(num)}>{num}</button>)}
            <button className="btn zero" onClick={() => handlePress('0')}>0</button>
            <button className="btn" onClick={() => handlePress('.')}>.</button>
          </div>
          <button className="btn equal" onClick={computeResult}>=</button>
        </div>
      </div>
    </div>
  );
}