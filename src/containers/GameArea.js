import Header from '../components/Header';
import Body from '../components/Body';
import PopUp from '../elements/PopUp';

var visit = localStorage.getItem('Visit');

function GameArea() {
  return (
    <div className='gamearea'>
      <Header />
      <Body />
      {!visit && <PopUp />}
    </div>
  );
}

export default GameArea;
