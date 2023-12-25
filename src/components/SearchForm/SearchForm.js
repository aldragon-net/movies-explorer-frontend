import './SearchForm.css';
import Switch from '../Switch/Switch.js';

function SearchForm () {
  return (
    <div className="search-form">
      <div className="search-form__container">
        <div className="search-form__icon"></div>
        <input className="search-form__input" />
        <button type="submit" className="search-form__button">Найти</button>
        <div className="search-form__inline-switch" >
          <Switch />
          <span className="search-form__switch-label">Короткометражки</span>
        </div>
      </div>
      <div className="search-form__bottom-switch" >
          <Switch />
          <span className="search-form__switch-label">Короткометражки</span>
        </div>
    </div>
  )
}

export default SearchForm;