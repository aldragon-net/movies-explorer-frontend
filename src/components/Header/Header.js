import { useState } from 'react';

import './Header.css';
import headerLogo from '../../images/logos/logo_circle.svg';
import Navigation from '../Navigation/Navigation.js';
import { useMatch, NavLink } from 'react-router-dom';
import MobileMenu from '../MobileMenu/MobileMenu.js';

const isLogged = true

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
      <NavLink to="/" className="navigation__link"><img src={headerLogo} alt ="" className="header__logo"/></NavLink>
      { isLogged ? <>
        <Navigation />
        <button className="header__menu-switch" onClick={handleMobileMenuSwitch}/>
      </> : <div>Регистрация</div> }
    </div>
    </>
  )
}

export default Header;