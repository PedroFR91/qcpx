import React, { useRef } from 'react';

function PaletteGrid({ setSelectedColor, color }) {
  var currentColor;
  const myPalette = useRef(null);
  const pickColor = (color) => {
    myPalette.current.style.border = '2px double #ffffff';
    setSelectedColor(color);
    currentColor = color;
    console.log(currentColor);
  };
  return (
    <div
      ref={myPalette}
      className='palettegrid'
      style={{ background: color }}
      onClick={() => pickColor(color)}
    ></div>
  );
}

export default PaletteGrid;
