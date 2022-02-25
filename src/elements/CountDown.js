import React, { useState } from 'react';

function CountDown(props) {
  const [seconds, setSeconds] = useState(props.start);
  var minutes = Math.floor(seconds / 60);
  var secs = seconds - minutes * 60;
  let myTime = setTimeout(
    () => setSeconds(seconds - 1),

    1000
  );

  if (seconds === 0) {
    clearTimeout(myTime);
    const levels = document.getElementById('levels');
    levels.classList.add('hide');
  }

  return (
    <div className='countdown'>
      <p>{secs}</p>
    </div>
  );
}

export default CountDown;
