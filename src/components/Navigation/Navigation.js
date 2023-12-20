import './Navigation.css';
import { useMatch, NavLink } from 'react-router-dom';


function Navigation () {
  const isLanding = useMatch("/");
  return (
    <div className="navigation">
      <NavLink to='/movies' className="navigation__link">Фильмы</NavLink>
      <NavLink to='/saved-movies' className="navigation__link">Сохраненные фильмы</NavLink>
      <NavLink to='/profile' className="navigation__profile">
        <div className="navigation__link">Профиль</div>
        <div className={`navigation__profile-icon ${isLanding && 'navigation__profile-icon_inverted'}`}></div>
      </NavLink>
    </div>
  )
}

export default Navigation;