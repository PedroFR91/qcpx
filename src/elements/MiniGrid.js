import React, { useRef } from 'react';

function MiniGrid({ selectedColor }) {
  const myDiv = useRef(null);

  const Color = () => {
    myDiv.current.style.backgroundColor = selectedColor;
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
