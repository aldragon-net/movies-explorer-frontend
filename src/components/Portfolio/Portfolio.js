import './Portfolio.css';
import { Link } from 'react-router-dom';

const projects = [{
  id: 1,
  name: 'Статичный сайт',
  url: 'http://aldragon.net/static/index.html',
}, {
  id: 2,
  name: 'Адаптивный сайт',
  url: 'https://aldragon-net.github.io/',
}, {
  id: 3,
  name: 'Одностраничное приложение',
  url: 'https://aldragon.nomoredomainsmonster.ru',
}];

function Portfolio () {
  return (
    <div className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      {projects.map((project, i) => (
      <Link key={project.id} to={project.url} className="portfolio__item" target="_blank">
        <span className="portfolio__link">{project.name}</span>
        <span className="portfolio__link">↗</span>
      </Link>
    ))}
    </div>
  )
}

export default Portfolio;