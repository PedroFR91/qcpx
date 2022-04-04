import React from 'react';

function Image({ nameImg, altImg, widthImg, heightImg }) {
  return (
    <>
      <img src={nameImg} alt={altImg} width={widthImg} height={heightImg} />
    </>
  );
}

export default Image;
