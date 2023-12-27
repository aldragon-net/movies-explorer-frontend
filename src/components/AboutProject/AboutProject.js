import './AboutProject.css';

function AboutProject () {
  return (
    <section id="about-project" className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__description">
        <div className="about-project__fact">
          <div className="about-project__fact-title">
            Дипломный проект включал 5 этапов
          </div>
          <div className="about-project__fact-info">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </div>
        </div>
        <div className="about-project__fact">
          <div className="about-project__fact-title">
            На выполнение диплома ушло 5 недель
          </div>
          <div className="about-project__fact-info">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </div>
        </div>
      </div>

      <div className="about-project__timeline">
        <span className="about-project__stage about-project__stage_color_black">1 неделя</span>
        <span className="about-project__stage about-project__stage_color_gray">4 недели</span>
        <span className="about-project__stage about-project__stage_color_white">Back-end</span>
        <span className="about-project__stage about-project__stage_color_white">Front-end</span>
      </div>
    </section>
  )
}

export default AboutProject;
