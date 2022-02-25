import React, { useState } from 'react';

function PaletteGrid(props) {
  const [pickcolor, setPickColor] = useState('#ffffff');

  const setPickcolor = (pickcolor) => {
    pickcolor = props.color;
    setPickColor(pickcolor);
    console.log(pickcolor);
  };
  return (
    <div
      className='palettegrid'
      style={{ background: props.color }}
      onClick={() => setPickcolor(pickcolor)}
    ></div>
  );
}

export default PaletteGrid;
