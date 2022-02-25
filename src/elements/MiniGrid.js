import React, { useState } from 'react';
import data from '../constants/data';
import PaletteGrid from './PaletteGrid';

function MiniGrid({ bgcolor }) {
  const [background, setBackground] = useState('#fff');

  const setColor = (background) => {
    setBackground(background);
  };
  /*backColor coge desde data*/
  return (
    <div
      className='minigrid'
      style={{ backgroundColor: background }}
      onClick={() => setColor('#ff0000')}
    ></div>
  );
}

export default MiniGrid;
