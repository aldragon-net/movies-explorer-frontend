import './MobileMenu.css';
import { NavLink } from 'react-router-dom';

function MobileMenu ({ isOpen, onClose }) {
  return (
    <div className={`mobile-menu ${isOpen ? "mobile-menu_visible" : ""}`}>
      <div className="mobile-menu__close-container">
        <button className="mobile-menu__close" onClick={onClose} />
      </div>
      <nav className="mobile-menu__nav">
        <NavLink to="/" className={({isActive}) => `mobile-menu__link ${isActive ? "mobile-menu__link_active" : ""}`}>Главная</NavLink>
        <NavLink to="/movies" className={({isActive}) => `mobile-menu__link ${isActive ? "mobile-menu__link_active" : ""}`}>Фильмы</NavLink>
        <NavLink to="/saved-movies" className={({isActive}) => `mobile-menu__link ${isActive ? "mobile-menu__link_active" : ""}`}>Сохраненные фильмы</NavLink>
      </nav>
      <NavLink to="/profile" className="mobile-menu__profile-link">
          <div className="mobile-menu__profile-text">Профиль</div>
          <div className="mobile-menu__profile-icon"></div>
        </NavLink>
    </div>

  )
}

export default MobileMenu;