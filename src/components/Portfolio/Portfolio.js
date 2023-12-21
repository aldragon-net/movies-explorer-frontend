import './Portfolio.css';
import arrow from '../../images/icons/arrow-upright.svg';
import { Link } from 'react-router-dom';

const projects = [{
  id: 1,
  name: 'Статичный сайт',
  url: 'https://www.com',
}, {
  id: 2,
  name: 'Адаптивный сайт',
  url: 'https://www.com',
}, {
  id: 3,
  name: 'Одностраничное приложение',
  url: 'https://www.com',
}];

function Portfolio () {
  return (
    <div className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      {projects.map((project, i) => (
      <Link to={project.url} key={project.id} className="portfolio__item">
        <span className="portfolio__link">{project.name}</span>
        <img src={arrow} />
       </Link>
    ))}
    </div>
  )
}

export default Portfolio;