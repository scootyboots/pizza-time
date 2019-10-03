import React from 'react';
import croost from './images/crooster.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={croost} className="App-logo" alt="croost" />
        <p>
          
        </p>
        <a
          className="App-link"
          href="https://en.wikipedia.org/wiki/Hackers_(film)"
          target="_blank"
          rel="noopener noreferrer"
        >
          I Know You Play the Game
        </a>
      </header>
    </div>
  );
}

export default App;
