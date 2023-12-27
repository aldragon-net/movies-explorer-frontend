import './Techs.css';

const techs = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'];

function Techs () {
  return (
    <section id="techs" className="techs">
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
    </section>
  )
}

export default Techs;
