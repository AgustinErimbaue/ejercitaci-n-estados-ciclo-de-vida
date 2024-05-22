import React, { useState } from "react";
import "./Counter.css";

const Counter = ({ initialValue, add, rest }) => {
  const [counter, setCounter] = useState(initialValue);

  const handleAdd = () => {
    setCounter(counter + add);
  };

  const handleRest = () => {
    setCounter(counter - rest);
  };

  return (
    <div className="counter-container">
      <div>
        <button onClick={handleAdd}>Sumar</button>
      </div>
      <div>
        <span>{counter}</span>
      </div>
      <div>
        <button onClick={handleRest} disabled={counter <= 0}>
          Restar
        </button>
      </div>
    </div>
  );
};

export default Counter;
