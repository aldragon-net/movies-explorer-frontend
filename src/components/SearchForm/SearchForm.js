import './SearchForm.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Switch from '../Switch/Switch.js';

function SearchForm ({handleSearch}) {
  const [pattern, setPattern] = useState('');
  const [onlyShort, setOnlyShort] = useState(false);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setPattern(data.pattern);
    handleSearch(data.pattern, onlyShort);
  };
  const handleSwitch = () => {
    handleSearch(pattern, !onlyShort);
    setOnlyShort(!onlyShort);
  }
  return (
    <div className="search-form">
      <form
        className="search-form__container"
        id="search"
        name="search"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="search-form__icon"></div>
        <input
          className="search-form__input"
          name="pattern"
          type="text"
          placeholder="Фильм"
          {...register("pattern", { required: true })} />
        <button type="submit" className="search-form__button">Найти</button>
        <div className="search-form__inline-switch" >
          <Switch onlyShort={onlyShort} handleSwitch={handleSwitch} />
          <span className="search-form__switch-label">Короткометражки</span>
        </div>
      </form>
      <div className="search-form__bottom-switch" >
        <Switch onlyShort={onlyShort} handleSwitch={handleSwitch} />
        <span className="search-form__switch-label">Короткометражки</span>
      </div>
    </div>
  )
}

export default SearchForm;