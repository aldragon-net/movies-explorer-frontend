import './MoviesCard.css';
import { moviesApiSettings } from '../../utils/settings';
import mainApi from '../../utils/MainApi.js';
import { useState, useEffect } from 'react';

function MoviesCard ({ movie, handleMovieSave, handleMovieDelete, inSaved, showSavedByUser=false }) {
  const [isSaved, setIsSaved] = useState(inSaved);
  const onSuccess = () => {
    setIsSaved(!isSaved)
  }
  const onFail = () => {
    console.log('FAIl')
  }
  const onSave = () => {
    handleMovieSave(movie, onSuccess, onFail);
  }
  const onUnsave = () => {
    handleMovieDelete(movie, onSuccess, onFail)
  }
  const minutes = movie.duration % 60;
  const hours = (movie.duration - minutes ) / 60;
  return (
    <div className="movies-card">
      <img
        className="movies-card__image"
        src={movie.image}
        alt={movie.nameRu} />
      <div className="movies-card__info">
        <span className="movies-card__title">{movie.nameRU}</span>
        <span className="movies-card__duration">{ hours > 0 ? `${hours}ч ${minutes}м` : `${minutes}м`}</span>
      </div>
      {showSavedByUser
       ?        <button
       className="movies-card__unsave-icon"
       type="button"
       aria-label="сохранить"
       onClick={onUnsave} />
       :
       <button
           className={isSaved ? "movies-card__saved-icon" : "movies-card__save-icon"}
           type="button"
           aria-label="сохранить"
           onClick={isSaved ? onUnsave : onSave} />}

    </div>

  )
}

export default MoviesCard;