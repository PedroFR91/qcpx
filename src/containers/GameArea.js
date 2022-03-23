import Header from '../components/Header';
import Body from '../components/Body';
import PopUp from '../elements/PopUp';

var firstvisit = true;
if (localStorage) {
  var visits = localStorage.getItem('visits');
  if (visits === null) {
    visits = 1;
  }
  if (visits === 1) {
    console.log('First visit');
    visits++;
  } else {
    console.log('Not first visit');
    visits++;
    firstvisit = false;
  }

  localStorage.setItem('visits', visits);
}
function GameArea() {
  return (
    <div className='gamearea' id='gamearea'>
      <Header />
      <Body />
      {firstvisit && <PopUp />}
      <div className='rotate'>
        <p> Please rotate your device</p>
      </div>
    </div>
  );
}

export default GameArea;
