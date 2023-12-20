import './Portfolio.css';
import arrow from '../../images/icons/arrow-upright.svg';

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
      <div key={project.id} className="portfolio__item">
        <a href={project.url} className="portfolio__link">{project.name}</a>
        <img src={arrow} />
       </div>
    ))}
    </div>
  )
}

export default Portfolio;