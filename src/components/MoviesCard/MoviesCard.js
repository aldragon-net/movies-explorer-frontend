import './MoviesCard.css';

function MoviesCard ({ movie, showSavedByUser=false }) {
  const minutes = movie.duration % 60;
  const hours = (movie.duration - minutes ) / 60;
  return (
    <div className="movies-card">
      <img src={movie.image.url} alt={movie.nameRu} />
      <div className="movies-card__info">
        <span className="movies-card__title">{movie.nameRU}</span>
        <span className="movies-card__duration">{ hours > 0 ? `${hours}ч ${minutes}м` : `${minutes}м`}</span>
      </div>
      {showSavedByUser
       ?        <button
       className="movies-card__unsave-icon"
       type="button"
       aria-label="сохранить" />
       :
       <button
           className={movie.isSaved ? "movies-card__saved-icon" : "movies-card__save-icon"}
           type="button"
           aria-label="сохранить" />}

    </div>

  )
}

export default MoviesCard;