import React from 'react';
import Image from '../elements/Image';
import backDifficultImg from '../assets/difficulty_dark_base_full.png';

function Levels() {
  function setLevelEasy() {
    const selectedeasy = document.getElementById('selecteasy');
    selectedeasy.classList.add('selected');
    const selectedmedium = document.getElementById('selectmedium');
    selectedmedium.classList.remove('selected');
    const selectedhard = document.getElementById('selecthard');
    selectedhard.classList.remove('selected');

    const level = document.getElementById('level');
    level.innerHTML = 'Easy';
    var cd = document.getElementById('cd');
    cd.innerHTML = 180;
  }
  function setLevelMedium() {
    const selectedmedium = document.getElementById('selectmedium');
    selectedmedium.classList.add('selected');
    const selectedeasy = document.getElementById('selecteasy');
    selectedeasy.classList.remove('selected');
    const selectedhard = document.getElementById('selecthard');
    selectedhard.classList.remove('selected');

    const level = document.getElementById('level');
    level.innerHTML = 'Medium';
    var cd = document.getElementById('cd');
    cd.innerHTML = 60;
  }
  function setLevelHard() {
    const selectedhard = document.getElementById('selecthard');
    selectedhard.classList.add('selected');
    const selectedeasy = document.getElementById('selecteasy');
    selectedeasy.classList.remove('selected');
    const selectedmedium = document.getElementById('selectmedium');
    selectedmedium.classList.remove('selected');

    const level = document.getElementById('level');
    level.innerHTML = 'Hard';
    var cd = document.getElementById('cd');
    cd.innerHTML = 30;
  }

  return (
    <div className='levels' id='levels'>
      <Image
        nameImg={backDifficultImg}
        widthImg={'100%'}
        className='backlevels'
        id='backlevels'
      />
      <div className='countdown'>
        <p id='countdowngeneral'></p>
      </div>
      <div className='listlevels' id='listlevels'>
        <p>Choose difficulty:</p>
        <div className='easylevel' id='selecteasy' onClick={setLevelEasy}>
          <div id='setleveleasy'>Easy</div>
          <div>
            <span id='settimeeasy'>3</span> min
          </div>
        </div>
        <div className='mediumlevel' id='selectmedium' onClick={setLevelMedium}>
          <div id='setlevelmedium'>Medium </div>
          <div id='settimemedium'>1 min</div>
        </div>
        <div className='hardlevel' id='selecthard' onClick={setLevelHard}>
          <div id='setlevelhard'>Hard</div>
          <div id='settimehard'>30 sec</div>
        </div>
      </div>
    </div>
  );
}

export default Levels;
