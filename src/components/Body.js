import { useState } from 'react';

import Image from '../elements/Image';
import buttonPlay from '../assets/button_play.png';
import buttonDone from '../assets/button_done.png';
import erase from '../assets/color_palette_erase.png';
import buttonCopyResult from '../assets/button_copy_result.png';
import Social from '../elements/Social';
import MiniGrid from '../elements/MiniGrid';
import PaletteGrid from '../elements/PaletteGrid';
import data from '../constants/data';
import backDifficultImg from '../assets/difficulty_dark_base_full.png';
import {
  setLevelEasy,
  setLevelMedium,
  setLevelHard,
  startCount,
  done,
  copyFocus,
} from '../elements/Utils';
import EraseGrid from '../elements/EraseGrid';

function Body() {
  const [selectedColor, setSelectedColor] = useState('#FFFFFF');
  const [titleEmoji, setTitleEmoji] = useState('');

  return (
    <div className='bodycontainer'>
      <div className='levelandtimepanel hide' id='levelandtimepanel'>
        <div id='level' className='hide'></div>
        <div id='cdata' className='hide'></div>
        <div id='cd' className='hide'></div>
      </div>
      <div className='finalpanel hide' id='finalpanel'>
        <div id='finaltheme' className='hide'></div>
        <div id='finallevel' className='hide'></div>
        <div id='usedtime' className='hide'></div>
      </div>
      <div className='gridcontainer'>
        <div className='grid' id='grid'>
          {data.grid.map((actualGrid) => (
            <MiniGrid
              key={actualGrid.id}
              mykey={actualGrid.id}
              color={actualGrid.minigrid}
              selectedColor={selectedColor}
              setTitleEmoji={setTitleEmoji}
            />
          ))}
        </div>
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
            <button
              className='easylevel'
              id='selecteasy'
              onClick={setLevelEasy}
            >
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
            <button
              className='hardlevel'
              id='selecthard'
              onClick={setLevelHard}
            >
              <div id='setlevelhard'>Hard</div>
              <div id='settimehard'>30 sec</div>
            </button>
          </div>
        </div>
      </div>
      <div className='palette hide' id='palette'>
        {data.palette.map((actualColor, index) => (
          <PaletteGrid
            key={index}
            color={actualColor.color}
            setSelectedColor={setSelectedColor}
          />
        ))}
        <EraseGrid
          color={'#FFFFFF'}
          setSelectedColor={setSelectedColor}
          className='erase'
        />
      </div>
      <div className='share ' id='share'>
        <Social titleEmoji={titleEmoji} />
      </div>
      <div
        className='button play disabled'
        id='buttonplay'
        onClick={startCount}
      >
        <Image nameImg={buttonPlay} widthImg={'100%'} />
      </div>
      <div className='button done hide' id='buttondone' onClick={done}>
        <Image nameImg={buttonDone} widthImg={'100%'} />
      </div>
      <div
        className='button copyresult hide'
        id='buttoncopy'
        onClick={copyFocus}
      >
        <Image nameImg={buttonCopyResult} widthImg={'100%'} />
      </div>
      <div className='button copied hide' id='copied'>
        Copied!
      </div>
      <div className='paypal'>
        Support our work via <a href='https://paypal.me/muchopixels'>Paypal.</a>
      </div>
    </div>
  );
}

export default Body;
