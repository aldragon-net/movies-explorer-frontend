import './SearchForm.css';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Switch from '../Switch/Switch.js';

function SearchForm ({handleSearch, switchState=false, value='' }) {

  const [pattern, setPattern] = useState(value);
  const [onlyShort, setOnlyShort] = useState(switchState);
  const { register, handleSubmit, formState } = useForm(
    {defaultValues: {pattern: value}, reValidateMode: 'onSubmit'});

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
        <div className="search-form__line">
          <div className="search-form__icon"></div>
          <div className="search-form__input">
            <input
              className="search-form__input"
              name="pattern"
              type="text"
              placeholder="Фильм"
              {...register("pattern", { required: true})} />
          </div>
          <button type="submit" className="search-form__button">Найти</button>
          <div className="search-form__inline-switch" >
            <Switch onlyShort={onlyShort} handleSwitch={handleSwitch} />
            <span className="search-form__switch-label">Короткометражки</span>
          </div>
        </div>
        <p className='search-form__error'>{Object.keys(formState.errors).length > 0 ? "Нужно ввести ключевое слово" : ""}</p>
      </form>

      <div className="search-form__bottom-switch" >
        <Switch onlyShort={onlyShort} handleSwitch={handleSwitch} />
        <span className="search-form__switch-label">Короткометражки</span>
      </div>
    </div>
  )
}

export default SearchForm;
