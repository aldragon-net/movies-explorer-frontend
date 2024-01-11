import './SearchForm.css';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Switch from '../Switch/Switch.js';

function SearchForm ({handleSearch, switchState=false, value='' }) {

  const [pattern, setPattern] = useState(value);
  const [onlyShort, setOnlyShort] = useState(switchState);
  const { register, handleSubmit, formState } = useForm({defaultValues: {pattern: value}});

  const onSubmit = (data) => {
    setPattern(data.pattern);
  };
  const handleSwitch = () => {
    setOnlyShort(!onlyShort);
  }

  useEffect(() => {
    handleSearch(pattern, onlyShort);
    }, [onlyShort, pattern, handleSearch]);

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
          placeholder={Object.keys(formState.errors).length > 0 ? "Введите название фильма" : "Фильм"}
          {...register("pattern", { required: true})} />
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
