import React from 'react';
import imgTitle from '../assets/quickpix_title.png';
function GameTittle() {
  return (
    <div>
      <img
        src={imgTitle}
        alt={'Game Logo'}
        className='gametitle centerindivtitle'
      />
    </div>
  );
}

export default GameTittle;
