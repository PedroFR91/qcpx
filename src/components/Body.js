import { useState } from 'react';
import LevelAndTimePanel from '../containers/LevelAndTimePanel';
import Image from '../elements/Image';
import buttonPlay from '../assets/button_play.png';
import buttonDone from '../assets/button_done.png';
import buttonCopyResult from '../assets/button_copy_result.png';
import Levels from '../elements/Levels';
import Social from '../elements/Social';
import MiniGrid from '../elements/MiniGrid';
import PaletteGrid from '../elements/PaletteGrid';
import data from '../constants/data';
import eraseImg from '../assets/color_palette_erase.png';
import CountDownGeneral from '../elements/CountDownGeneral';

function Body() {
  const [selectedColor, setSelectedColor] = useState('#FFFFFF');
  function setLevel() {}
  function done() {
    const buttondone = document.getElementById('buttondone');
    buttondone.classList.add('hide');
    const buttoncopy = document.getElementById('buttoncopy');
    buttoncopy.classList.remove('hide');
    const palette = document.getElementById('palette');
    palette.classList.add('hide');
    const share = document.getElementById('share');
    share.classList.remove('hide');
    const socialsection = document.getElementById('socialsection');
    socialsection.classList.remove('hide');
    const header = document.getElementById('header');
    header.classList.remove('gradient');
    header.classList.add('gradientfinal');
    const themeheader = document.getElementById('themeheader');
    themeheader.innerHTML = 'Next Theme: ';
    const theme = document.getElementById('theme');
    theme.innerHTML = '24:00:00';
  }
  return (
    <div className='bodycontainer'>
      <div className='leveldandtimeshape ' id='levelandtimeshape'>
        <LevelAndTimePanel />
      </div>
      <div className='levelandtimeeasy hide ' id='levelandtimeeasy'>
        <LevelAndTimePanel level={'Easy'} time={"3'00''"} />
      </div>
      <div className='levelandtimemedium hide ' id='levelandtimemedium'>
        <LevelAndTimePanel level={'Medium'} time={"60''"} />
      </div>
      <div className='levelandtimehard hide ' id='levelandtimehard'>
        <LevelAndTimePanel level={'Hard'} time={"30''"} />
      </div>

      <div className='gridcontainer'>
        <div className='grid'>
          {data.grid.map((actualGrid, index) => (
            <MiniGrid
              key={index}
              color={actualGrid.minigrid}
              selectedColor={selectedColor}
            />
          ))}
        </div>
        <Levels />
      </div>
      <div className='palette' id='palette'>
        {data.palette.map((actualColor, index) => (
          <PaletteGrid
            key={index}
            color={actualColor.color}
            setSelectedColor={setSelectedColor}
          />
        ))}
      </div>
      <div className='share hide' id='share'>
        <Social />
      </div>
      <div className='button play' id='buttonplay'>
        <Image nameImg={buttonPlay} widthImg={'100%'} onClick={setLevel} />
      </div>
      <div className='button done hide' id='buttondone' onClick={done}>
        <Image nameImg={buttonDone} widthImg={'100%'} />
      </div>
      <div className='button copyresult hide' id='buttoncopy'>
        <Image nameImg={buttonCopyResult} widthImg={'100%'} />
      </div>

      <div>Support our work via Paypal</div>
    </div>
  );
}

export default Body;
