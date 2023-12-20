import './AboutMe.css';
import myPhoto from '../../images/aboutme/alexander_drakon.jpg'
import Portfolio from '../Portfolio/Portfolio.js';

function AboutMe () {
  return (
    <div className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__info">
        <div className="about-me__text">
          <div>
            <div className="about-me__name">Александр</div>
            <div className="about-me__occupation">фронтенд-разработчик, 40 лет</div>
            <div className="about-me__bio">
              Я родился в Дубне, сейчас живу в Долгопрудном, закончил МФТИ.
              Увлекаюсь астрономией, парапланеризмом и горным трекингом.
              Работаю в Объединенном институте высоких температур.
            </div>
          </div>
          <a href="#" className="about-me__link">Github</a>
        </div>
        <img src={myPhoto} className="about-me__photo" />
      </div>
      <Portfolio />
    </div>
  )
}

export default AboutMe;