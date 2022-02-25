import GameTittle from '../containers/GameTittle';
import ThemeHeader from '../containers/ThemeHeader';
import Theme from '../containers/Theme';
function Header() {
  return (
    <div className='header gradient'>
      <GameTittle />
      <ThemeHeader />
      <Theme theme={'?????'} />
    </div>
  );
}

export default Header;
