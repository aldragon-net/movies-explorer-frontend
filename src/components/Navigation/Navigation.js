import './Navigation.css';
import { useMatch, NavLink, Link } from 'react-router-dom';


function Navigation () {
  const isLanding = useMatch("/");
  return (
    <div className="navigation">
      <NavLink
        to='/movies'
        className={({isActive}) => `navigation__link ${isActive ? "navigation__link_active" : ""}`}>
        Фильмы
      </NavLink>
      <NavLink
        to='/saved-movies'
        className={({isActive}) => `navigation__link ${isActive ? "navigation__link_active" : ""}`}>
        Сохраненные фильмы
      </NavLink>
      <div className="navigation__profile">
        <NavLink
          to='/profile'
          className={({isActive}) => `navigation__link ${isActive ? "navigation__link_active" : ""}`}>
          Профиль
        </NavLink>
        <Link
          to='/profile'
          className={`navigation__profile-icon ${isLanding && 'navigation__profile-icon_inverted'}`} />
      </div>
    </div>
  )
}

export default Navigation;
