import './Header.css';
import headerLogo from '../../images/logos/logo_circle.svg';
import Navigation from '../Navigation/Navigation.js';
import { useMatch, NavLink } from 'react-router-dom';

const isLogged = true;

function Header () {
  const isLanding = useMatch("/");
  return (
    <div className={`header ${isLanding && 'header_colored'}`}>
      <NavLink to="/" className="navigation__link"><img src={headerLogo} className="header__logo"/></NavLink>
      { isLogged ? <Navigation /> : <div>Регистрация</div> }
    </div>
  )
}

export default Header;