import './Techs.css';

function Techs () {

  const techs = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'];

  return (
    <section id="techs" className="techs">
      <div className="techs__content">
        <h2 className="techs__title">Технологии</h2>
        <div className="techs__count">7 технологий</div>
        <div className="techs__info">
          На курсе веб-разработки мы освоили технологии,
          которые применили в дипломном проекте.
        </div>
        <ul className="techs__list">
          {techs.map((tech, i) => (
            <li key={i} className="techs__item">{tech}</li>)
          )}
        </ul>
      </div>
    </section>
  )
}

export default Techs;
