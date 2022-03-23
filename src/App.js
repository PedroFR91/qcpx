import React from 'react';
import './App.css';
import GameArea from './containers/GameArea';

function App() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  return (
    <div className='App'>
      <GameArea />
    </div>
  );
}

export default App;
