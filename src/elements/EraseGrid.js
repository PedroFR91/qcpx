import React, { useRef } from 'react';
import eraseImg from '../assets/color_palette_erase.png';

function EraseGrid({ setSelectedColor, color }) {
  var currentColor;
  const myPalette = useRef(null);
  const pickColor = (color) => {
    myPalette.current.classList.add = '2px double #ffffff';
    setSelectedColor(color);
    currentColor = color;
    console.log(currentColor);
  };
  return (
    <div
      ref={myPalette}
      className='erase-image '
      style={{ background: color }}
      onClick={() => pickColor(color)}
    >
      <img
        src={eraseImg}
        height={'100%'}
        alt={'erase_img'}
        className='erase-image-pos'
      />
    </div>
  );
}

export default EraseGrid;
