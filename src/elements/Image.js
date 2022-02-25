import React from 'react';

function Image({ nameImg, altImg, widthImg }) {
  return (
    <div>
      <img src={nameImg} alt={altImg} width={widthImg} />
    </div>
  );
}

export default Image;
