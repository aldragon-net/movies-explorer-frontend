import './Header.css';
import headerLogo from '../../images/logos/logo_circle.svg';
import Navigation from '../Navigation/Navigation.js';
import { useState } from 'react';
import { useMatch, NavLink } from 'react-router-dom';
import MobileMenu from '../MobileMenu/MobileMenu.js';

function Header ({isAuthorized}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleMobileMenuSwitch = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }
  const isLanding = useMatch("/");
  return (
      <header className={`header ${isLanding && 'header_color_pink'}`}>
        <MobileMenu isOpen={isMobileMenuOpen} onClose={handleMobileMenuSwitch} />
        <div className="header__container">
          <NavLink to="/" className="header__link">
            <img src={headerLogo} alt ="лого Movies Explorer" className="header__logo"/>
          </NavLink>
          { isAuthorized ?
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
            </>
          }
        </div>
      </header>
  )
}

export default Header;