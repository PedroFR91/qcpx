import React from 'react';
import image from '../assets/button_how_to_play.png';

function showPopUp() {
  const popup = document.getElementById('popup');
  popup.classList.remove('hide');

  localStorage.removeItem('Visit');
}

function Help() {
  return (
    <div className='help' onClick={showPopUp}>
      <img src={image} alt='' width={'100%'} />
    </div>
  );
}

export default Help;
