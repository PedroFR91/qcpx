import React from 'react';
import Image from '../elements/Image';
import backDifficultImg from '../assets/difficulty_dark_base_full.png';
import CountDown from './CountDown';

function hideLevels() {
  const listlevels = document.getElementById('listlevels');
  listlevels.classList.add('hide');
}

function setLevelEasy() {
  hideLevels();
}
function setLevelMedium() {
  hideLevels();
}
function setLevelHard() {
  hideLevels();
}

function Levels() {
  return (
    <div className='levels hide' id='levels'>
      <Image
        nameImg={backDifficultImg}
        widthImg={'100%'}
        className='backlevels'
        id='backlevels'
      />
      <CountDown start={10} />
      <div className='inicountdown' id='inicountdown'></div>
      <div className='listlevels' id='listlevels'>
        <p>Choose difficulty:</p>
        <div
          className='easylevel selected'
          id='selecteasy'
          onClick={hideLevels}
        >
          <div id='setleveleasy'>Easy</div>
          <div>
            <span id='settimeeasy'>3</span> min
          </div>
        </div>
        <div className='mediumlevel' id='selectmedium' onClick={hideLevels}>
          <div id='setlevelmedium'>Medium </div>
          <div id='settimemedium'>1 min</div>
        </div>
        <div className='hardlevel' id='selecthard' onClick={hideLevels}>
          <div id='setlevelhard'>Hard</div>
          <div id='settimehard'>30 sec</div>
        </div>
      </div>
    </div>
  );
}

export default Levels;
