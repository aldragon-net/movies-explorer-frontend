import './MoviesCard.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MoviesCard ({ movie, handleMovieSave, handleMovieDelete, inSaved, showSavedByUser=false }) {

  const minutes = movie.duration % 60;
  const hours = (movie.duration - minutes ) / 60;
  const [isSaved, setIsSaved] = useState(false);

  const onSuccess = () => {
    setIsSaved(!isSaved)
  }
  const onFail = () => {
    console.log('Ошибка обработки фильма')
  }
  const onSave = () => {
    handleMovieSave(movie, onSuccess, onFail);
  }
  const onUnsave = () => {
    handleMovieDelete(movie, onSuccess, onFail)
  }

  useEffect(() => {
    setIsSaved(inSaved)
    }, [inSaved]);

  return (
    <div className="movies-card">
      <Link to={movie.trailerLink} target='_blank'>
        <img
          className="movies-card__image"
          src={movie.image}
          alt={movie.nameRu} />
      </Link>
      <div className="movies-card__info">
        <span className="movies-card__title">{movie.nameRU}</span>
        <span className="movies-card__duration">{ hours > 0 ? `${hours}ч ${minutes}м` : `${minutes}м`}</span>
      </div>
      {showSavedByUser
        ?
          <button
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
