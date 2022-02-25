import React from 'react';

function LevelAndTimePanel(props) {
  return (
    <div className='levelandtimepanel'>
      <div id='level' className='selected'>
        <p id='leveleasy'>{props.level}</p>
      </div>
      <div id='cd' className=''>
        {props.time}
      </div>
    </div>
  );
}

export default LevelAndTimePanel;
