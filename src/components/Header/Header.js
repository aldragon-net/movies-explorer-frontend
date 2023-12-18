import './Header.css';
import { useMatch } from 'react-router-dom';

function Header () {
  const isLanding = useMatch("/");
  return (
    <div className={`header ${isLanding && 'header_colored'}`}>
      <h1>Шапка</h1>
    </div>
  )
}

export default Header;