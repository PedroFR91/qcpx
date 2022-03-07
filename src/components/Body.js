import { useState } from 'react';

import Image from '../elements/Image';
import buttonPlay from '../assets/button_play.png';
import buttonDone from '../assets/button_done.png';
import buttonCopyResult from '../assets/button_copy_result.png';
import Levels from '../elements/Levels';
import Social from '../elements/Social';
import MiniGrid from '../elements/MiniGrid';
import PaletteGrid from '../elements/PaletteGrid';
import data from '../constants/data';

function Body() {
  const [selectedColor, setSelectedColor] = useState('#FFFFFF');
  const [titleEmoji, setTitleEmoji] = useState('Hola');

  const buttondone = document.getElementById('buttondone');
  const buttoncopy = document.getElementById('buttoncopy');
  const palette = document.getElementById('palette');
  const share = document.getElementById('share');
  const socialsection = document.getElementById('socialsection');
  const header = document.getElementById('header');
  const themeheader = document.getElementById('themeheader');
  const todaytheme = document.getElementById('todaytheme');
  const finaltheme = document.getElementById('finaltheme');
  const finallevel = document.getElementById('finallevel');
  const level = document.getElementById('level');
  const usedtimediv = document.getElementById('usedtime');

  var now = new Date();

  function done() {
    const buttondone = document.getElementById('buttondone');
    const buttoncopy = document.getElementById('buttoncopy');
    const palette = document.getElementById('palette');
    const share = document.getElementById('share');
    const socialsection = document.getElementById('socialsection');
    const header = document.getElementById('header');
    const themeheader = document.getElementById('themeheader');
    const todaytheme = document.getElementById('todaytheme');
    const finaltheme = document.getElementById('finaltheme');
    const finallevel = document.getElementById('finallevel');

    buttondone.classList.add('hide');
    buttoncopy.classList.remove('hide');
    palette.classList.add('hide');
    share.classList.remove('hide');
    socialsection.classList.remove('hide');
    header.classList.remove('gradient');
    header.classList.add('gradientfinal');
    themeheader.innerHTML = 'Next Theme: ';
    todaytheme.innerHTML = '24:00:00';
    finaltheme.classList.remove('hide');
    finaltheme.innerHTML = '#' + data.themes[i];
    finallevel.classList.remove('hide');
    finallevel.innerHTML = '/' + level.innerHTML;
    usedtimediv.classList.remove('hide');
  }
  function hideLevels() {
    const listlevels = document.getElementById('listlevels');
    listlevels.classList.add('hide');
  }

  function startCount() {
    hideLevels();
    const level = document.getElementById('level');
    level.classList.remove('hide');
    var cd = document.getElementById('cd');
    cd.classList.remove('hide');
    const palette = document.getElementById('palette');
    palette.classList.remove('hide');

    const principalcountdown = setInterval(cdgeneral, 1000);
    var countdowngeneral = 3;
    function cdgeneral() {
      if (countdowngeneral === -1) {
        clearInterval(principalcountdown);
        const levels = document.getElementById('levels');
        levels.classList.add('hide');
        const buttonplay = document.getElementById('buttonplay');
        buttonplay.classList.add('hide');
        const buttondone = document.getElementById('buttondone');
        buttondone.classList.remove('hide');
        const todaytheme = document.getElementById('todaytheme');
        todaytheme.innerHTML = data.themes[0];

        const gamecountdown = setInterval(cdgame, 1000);
        var usedtime = 0;
        var timelevel = cd.innerHTML;
        function cdgame() {
          if (timelevel === 0) {
            clearInterval(gamecountdown);
            const headergradient = document.getElementById('header');
            headergradient.classList.add('gradientfinal');
            const themeheader = document.getElementById('themeheader');
            themeheader.innerHTML = 'Next Theme:';
            const todaytheme = document.getElementById('todaytheme');
            todaytheme.innerHTML = '24:00:00';
            const palette = document.getElementById('palette');
            palette.classList.add('hide');
            const social = document.getElementById('socialsection');
            social.classList.remove('hide');
            const levelandtimepanel =
              document.getElementById('levelandtimepanel');
            levelandtimepanel.classList.add('hide');
            const level = document.getElementById('level');
            level.classList.add('hide');
            var cd = document.getElementById('cd');
            cd.classList.add('hide');
            const finalpanel = document.getElementById('finalpanel');
            finalpanel.classList.remove('hide');

            const finaltheme = document.getElementById('finaltheme');
            finaltheme.classList.remove('hide');
            finaltheme.innerHTML = '#' + data.themes[i];
            const finallevel = document.getElementById('finallevel');
            finallevel.classList.remove('hide');
            finallevel.innerHTML = '/' + level.innerHTML;
            const usedtimediv = document.getElementById('usedtime');
            usedtimediv.classList.remove('hide');
            usedtimediv.innerHTML = '/' + usedtime + "''";
          }
          if (timelevel < 10 && timelevel % 2 === 1) {
            const headergradient = document.getElementById('header');
            headergradient.classList.add('gradientcountdown');
          }
          if (timelevel < 10 && timelevel % 2 === 0) {
            const headergradient = document.getElementById('header');
            headergradient.classList.remove('gradientcountdown');
          }
          usedtime++;
          timelevel--;
          var minutes = Math.floor(timelevel / 60);
          var seconds = timelevel - minutes * 60;
          document.getElementById('cd').innerHTML =
            minutes + "'" + seconds + "''";
        }
      }
      document.getElementById('countdowngeneral').innerHTML =
        countdowngeneral--;
    }
  }

  const setnewtheme = setInterval(setTheme, 84600000);
  var i = 0;
  function setTheme() {
    const todaytheme = document.getElementById('todaytheme');
    todaytheme.innerHTML = data.themes[i];
    i++;
  }
  return (
    <div className='bodycontainer'>
      <div className='levelandtimepanel hide' id='levelandtimepanel'>
        <div id='level' className='hide'></div>
        <div id='cd' className='hide'></div>
      </div>
      <div className='finalpanel hide' id='finalpanel'>
        <div id='finaltheme' className='hide'></div>
        <div id='finallevel' className='hide'></div>
        <div id='usedtime' className='hide'></div>
      </div>

      <div className='gridcontainer'>
        <div className='grid'>
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
        <Levels />
      </div>
      <div className='palette hide' id='palette'>
        {data.palette.map((actualColor, index) => (
          <PaletteGrid
            key={index}
            color={actualColor.color}
            setSelectedColor={setSelectedColor}
          />
        ))}
      </div>
      <div className='share ' id='share'>
        <Social titleEmoji={titleEmoji} />
      </div>
      <div className='button play' id='buttonplay' onClick={startCount}>
        <Image nameImg={buttonPlay} widthImg={'100%'} />
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
