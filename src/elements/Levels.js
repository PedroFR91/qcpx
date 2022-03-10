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
    var cdata = document.getElementById('cdata');
    cdata.innerHTML = "3'00''";
    var cd = document.getElementById('cd');
    cd.innerHTML = 180;

    const buttonplay = document.getElementById('buttonplay');
    buttonplay.classList.remove('disabled');
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
    var cdata = document.getElementById('cdata');
    cdata.innerHTML = "1'00''";
    var cd = document.getElementById('cd');
    cd.innerHTML = 60;

    const buttonplay = document.getElementById('buttonplay');
    buttonplay.classList.remove('disabled');
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
    var cdata = document.getElementById('cdata');
    cdata.innerHTML = "0'30''";
    var cd = document.getElementById('cd');
    cd.innerHTML = 30;

    const buttonplay = document.getElementById('buttonplay');
    buttonplay.classList.remove('disabled');
  }

  return (
    <div className='levels ' id='levels'>
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
        <button className='easylevel' id='selecteasy' onClick={setLevelEasy}>
          <div id='setleveleasy'>Easy</div>
          <div>
            <span id='settimeeasy'>3</span> min
          </div>
        </button>
        <button
          className='mediumlevel'
          id='selectmedium'
          onClick={setLevelMedium}
        >
          <div id='setlevelmedium'>Medium </div>
          <div id='settimemedium'>1 min</div>
        </button>
        <button className='hardlevel' id='selecthard' onClick={setLevelHard}>
          <div id='setlevelhard'>Hard</div>
          <div id='settimehard'>30 sec</div>
        </button>
      </div>
    </div>
  );
}

export default Levels;
