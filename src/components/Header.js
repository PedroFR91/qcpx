import GameTittle from '../containers/GameTittle';
import ThemeHeader from '../containers/ThemeHeader';
import Theme from '../containers/Theme';
import Help from '../elements/Help';

function Header() {
  return (
    <div className='header gradient' id='header'>
      <GameTittle />
      <ThemeHeader />
      <Theme />
      <Help />
    </div>
  );
}

export default Header;
