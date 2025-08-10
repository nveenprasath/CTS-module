import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const increment = () => {
    setCount(count + 1);
    sayHello();
  };

  const sayHello = () => {
    alert("Hello! Members!");
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayWelcome = () => {
    alert("Welcome");
  };

  const onPressHandler = () => {
    alert("I am clicked");
  };

  const handleRupeesChange = (e) => {
    setRupees(e.target.value);
  };

  const handleSubmit = (e) => {

    const euroValue = (parseFloat(rupees) / 80).toFixed(2); 
    setEuro(euroValue);
    alert(`Converting to Euro Amount is ${euroValue}`);
  };

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={increment}>Increment</button>
      <br /><br />
      <button onClick={decrement}>Decrement</button>
      <br /><br />
      <button onClick={sayWelcome}>Say welcome</button>
      <br /><br />
      <button onClick={onPressHandler}>Click on me</button>
      <h1 style={{ color: 'green' }}>Currency Convertor!!!</h1>
      <form onSubmit={handleSubmit}>
        <label>Amount:    </label>
        <input
          type="number"
          value={rupees}
          onChange={handleRupeesChange}
        />
        <br /><br />
        <label>Currency:</label>
        <input
          type="text"
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
