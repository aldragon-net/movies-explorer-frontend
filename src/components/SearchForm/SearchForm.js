import './SearchForm.css';
import { useForm } from 'react-hook-form';
import Switch from '../Switch/Switch.js';

function SearchForm () {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
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
          name="movie"
          type="text"
          placeholder="Фильм"
          {...register("movie", { required: true })} />
        <button type="submit" className="search-form__button">Найти</button>
        <div className="search-form__inline-switch" >
          <Switch />
          <span className="search-form__switch-label">Короткометражки</span>
        </div>
      </form>
      <div className="search-form__bottom-switch" >
        <Switch />
        <span className="search-form__switch-label">Короткометражки</span>
      </div>
    </div>
  )
}

export default SearchForm;