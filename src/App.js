import React from 'react';
import './App.css';
import GameArea from './containers/GameArea';
import { ColorProvider } from './elements/colorContext';

function App() {
  const palette = [
    { white: '#E6E7E7' },
    { black: '#31373D' },
    { brown: '#C1694F' },
    { blue: '#55B1ED' },
    { green: '#78B159' },
    { purple: '#A98ED6' },
    { red: '#DE2E44' },
    { yellow: '#FACB58' },
    { erase: '#FFFFFF' },
  ];
  return (
    <div className='App'>
      <ColorProvider value={palette}>
        <GameArea />
      </ColorProvider>
    </div>
  );
}

export default App;
