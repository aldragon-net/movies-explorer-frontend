import { useState } from 'react';

import './Header.css';
import headerLogo from '../../images/logos/logo_circle.svg';
import Navigation from '../Navigation/Navigation.js';
import { useMatch, NavLink } from 'react-router-dom';
import MobileMenu from '../MobileMenu/MobileMenu.js';

const isLogged = true;  // TODO

function Header () {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleMobileMenuSwitch = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }
  const isLanding = useMatch("/");
  return (
    <>
    <MobileMenu isOpen={isMobileMenuOpen} onClose={handleMobileMenuSwitch} />
    <div className={`header ${isLanding && 'header_colored'}`}>
      <NavLink to="/" className="header__link"><img src={headerLogo} alt ="" className="header__logo"/></NavLink>
      { isLogged ?
        <>
          <Navigation />
          <button className="header__menu-switch" onClick={handleMobileMenuSwitch}/>
        </>
       : <>
          <div>
            <NavLink to="/signup" className="header__link">Регистрация</NavLink>
            <NavLink to="/signin" className="header__link">
              <button type="button" className="header__button">Войти</button>
            </NavLink>
          </div>
        </> }
    </div>
    </>
  )
}

export default Header;