import React from 'react';

function PaletteGrid({ setSelectedColor, color }) {
  var currentColor;
  const pickColor = (color) => {
    setSelectedColor(color);
    currentColor = color;
    console.log(currentColor);
  };
  return (
    <div
      className='palettegrid'
      style={{ background: color }}
      onClick={() => pickColor(color)}
    ></div>
  );
}

export default PaletteGrid;
