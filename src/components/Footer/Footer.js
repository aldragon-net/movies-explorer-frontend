import './Footer.css';
import { Link } from 'react-router-dom';

function Footer () {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__info">
        <span className="footer__copyright">&copy; 2023</span>
        <div className="footer__links">
          <Link to="https://practicum.yandex.ru" className="footer__link" target="_blank" >Яндекс.Практикум</Link>
          <Link to="https://github.com" className="footer__link" target="_blank">GitHub</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;