import React from 'react';
import Image from '../elements/Image';
import backDifficultImg from '../assets/difficulty_dark_base_full.png';
import CountDownGeneral from './CountDownGeneral';

function Levels() {
  function setLevelEasy() {
    hideLevels();
    startCount();
    const levelandtimeshape = document.getElementById('levelandtimeshape');
    levelandtimeshape.classList.add('hide');
    const levelandtimeeasy = document.getElementById('levelandtimeeasy');
    levelandtimeeasy.classList.remove('hide');
  }
  function setLevelMedium() {
    hideLevels();
    const levelandtimeshape = document.getElementById('levelandtimeshape');
    levelandtimeshape.classList.add('hide');
    const levelandtimemedium = document.getElementById('levelandtimemedium');
    levelandtimemedium.classList.remove('hide');
  }
  function setLevelHard() {
    hideLevels();
    const levelandtimeshape = document.getElementById('levelandtimeshape');
    levelandtimeshape.classList.add('hide');
    const levelandtimehard = document.getElementById('levelandtimehard');
    levelandtimehard.classList.remove('hide');
  }
  function hideLevels() {
    const levels = document.getElementById('levels');
    levels.classList.add('hide');
  }
  const startCount = () => {};

  return (
    <div className='levels hide' id='levels'>
      <Image
        nameImg={backDifficultImg}
        widthImg={'100%'}
        className='backlevels'
        id='backlevels'
      />
      <div className='inicountdown' id='inicountdown'>
        {/*<CountDownGeneral start={10} />*/}
      </div>
      <div className='listlevels' id='listlevels'>
        <p>Choose difficulty:</p>
        <div
          className='easylevel selected'
          id='selecteasy'
          onClick={setLevelEasy}
        >
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
