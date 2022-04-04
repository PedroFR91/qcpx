import React from 'react';
import image from '../assets/button_how_to_play.png';

function showPopUp() {
  document.querySelector('.popup').style.visibility = 'visible';
}

function Help() {
  return (
    <div className='help' onClick={showPopUp}>
      <img src={image} alt='' width={'100%'} />
    </div>
  );
}

export default Help;
