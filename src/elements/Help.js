import React from 'react';
import image from '../assets/button_how_to_play.png';
import PopUp from './PopUp';

function showPopUp() {
  const popup = document.querySelector('.popup');
  popup.classList.remove('add');
}

function Help() {
  return (
    <div className='help' onClick={showPopUp}>
      <img src={image} alt='' width={'100%'} />
    </div>
  );
}

export default Help;
