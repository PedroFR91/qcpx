import React from 'react';
import Image from '../elements/Image';
import popUpImg from '../assets/pop-up_how-to-play-v02.png';
import buttonCloseImg from '../assets/button_close.png';

function hiddenPopUp() {
  document.getElementById('popup').style.visibility = 'hidden';
}

function PopUp() {
  return (
    <div className='popup' id='popup'>
      <Image nameImg={popUpImg} widthImg={'100%'} />
      <button className='buttonclose' onClick={hiddenPopUp}>
        <Image nameImg={buttonCloseImg} widthImg={'100%'} />
      </button>
    </div>
  );
}

export default PopUp;
