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

function Body() {
  const [selectedColor, setSelectedColor] = useState('#000000');
  return (
    <div className='bodycontainer'>
      <div className='levelandtime'>
        <LevelAndTimePanel level={'Easy'} time={'3:00'} />
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
      <div className='button play' id='buttonplay'>
        <Image nameImg={buttonPlay} widthImg={'100%'} />
      </div>
      <div className='button done hide' id='buttondone'>
        <Image nameImg={buttonDone} widthImg={'100%'} />
      </div>
      <div className='button copyresult hide' id='buttoncopy'>
        <Image nameImg={buttonCopyResult} widthImg={'100%'} />
      </div>
      <div className='share '>
        <Social />
      </div>
    </div>
  );
}

export default Body;
