import React from 'react';

function LevelAndTimePanel(props) {
  return (
    <div className='levelandtimepanel'>
      <div id='level' className='selected'>
        {props.level}
      </div>
      <div id='cd' className=''>
        {props.time}
      </div>
    </div>
  );
}

export default LevelAndTimePanel;
