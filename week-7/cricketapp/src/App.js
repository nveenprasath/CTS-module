import React, { useState } from 'react';
import ListOfPlayers from './ListOfplayers';
import IndianPlayers from './IndianPlayers';
import './App.css';

const App = () => {
  const [flag, setFlag] = useState(true);

  return (
    <div className="App">
      <h1>Cricket App</h1>
      <button onClick={() => setFlag(!flag)}>
        {flag ? "Show Indian Players" : "Show Player Scores"}
      </button>

      {flag ? <ListOfPlayers /> : <IndianPlayers />}
    </div>
  );
};

export default App;
