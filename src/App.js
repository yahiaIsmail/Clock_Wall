import React from 'react';

import './App.css';
import ClockWall from "./components/clock/ClockWall";

function App() {
  return (
      <div className="App">
          <header className="App-header">
              <h2 >WELCOME ORDA </h2>
              <ClockWall />
          </header>
      </div>
  );
}

export default App;
