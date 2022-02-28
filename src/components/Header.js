import GameTittle from '../containers/GameTittle';
import ThemeHeader from '../containers/ThemeHeader';
import Theme from '../containers/Theme';
function Header() {
  return (
    <div className='header gradient' id='header'>
      <GameTittle />
      <ThemeHeader />
      <Theme />
    </div>
  );
}

export default Header;
