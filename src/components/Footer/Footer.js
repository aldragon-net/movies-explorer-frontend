import './Footer.css';

function Footer () {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__info">
        <span className="footer__copyright">&copy; 2023</span>
        <div className="footer__links">
          <a href="#" className="footer__link">Яндекс.Практикум</a>
          <a href="#" className="footer__link">GitHub</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;