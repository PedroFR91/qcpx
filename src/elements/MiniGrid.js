import React, { useRef } from 'react';

function MiniGrid({ selectedColor, index }) {
  const myDiv = useRef(null);

  const Color = () => {
    myDiv.current.style.backgroundColor = selectedColor;
    console.log(selectedColor);
    console.log(myDiv.index);
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
