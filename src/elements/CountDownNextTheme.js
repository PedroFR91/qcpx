import React, { useState } from 'react';

function CountDownNextTheme(props) {
  const [seconds, setSeconds] = useState(props.start);

  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var secs = seconds - minutes * 60 - hours * 3600;
  let myTime = setTimeout(
    () => setSeconds(seconds - 1),

    1000
  );

  if (seconds === 0) {
    clearTimeout(myTime);
  }

  return (
    <div className='countdown'>
      <p>
        {hours}:{minutes}:{secs}
      </p>
    </div>
  );
}

export default CountDownNextTheme;
