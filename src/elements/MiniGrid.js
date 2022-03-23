import React, { useRef } from 'react';
var toEmoji = [
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
  '⬜',
];

function MiniGrid({ selectedColor, mykey, finalEmoji, setTitleEmoji }) {
  const myDiv = useRef(null);

  const Color = (color) => {
    myDiv.current.style.backgroundColor = selectedColor;

    if (selectedColor === '#E6E7E7') {
      selectedColor = '⬜';
    }
    if (selectedColor === '#31373D') {
      selectedColor = '⬛';
    }
    if (selectedColor === '#C1694F') {
      selectedColor = '🟫';
    }
    if (selectedColor === '#55B1ED') {
      selectedColor = '🟦';
    }
    if (selectedColor === '#78B159') {
      selectedColor = '🟩';
    }
    if (selectedColor === '#A98ED6') {
      selectedColor = '🟪';
    }
    if (selectedColor === '#DE2E44') {
      selectedColor = '🟥';
    }
    if (selectedColor === '#FACB58') {
      selectedColor = '🟨';
    }
    if (selectedColor === '#FFFFFF') {
      selectedColor = '⬜';
    }

    toEmoji.splice(mykey, 1, selectedColor);
    finalEmoji = toEmoji.join('');
    setTitleEmoji(finalEmoji);
  };

  return (
    <div
      ref={myDiv}
      className='minigrid'
      style={{ backgroundColor: '#FFFFFF' }}
      onClick={(e) => Color()}
    ></div>
  );
}

export default MiniGrid;
