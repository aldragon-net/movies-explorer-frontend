import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList ({ movies, savedIds, showSavedByUser, handleMovieSave, handleMovieDelete }) {
  return (
    <ul className="movies-card-list">
      {movies.map((movie, i) => (
        <li className="movies-card-list__item">
          <MoviesCard
            key={i}
            movie={movie}
            inSaved={savedIds.includes(movie.movieId)}
            showSavedByUser={showSavedByUser}
            handleMovieSave={handleMovieSave}
            handleMovieDelete={handleMovieDelete} />
        </li>
      ))}
    </ul>
  )
}

export default MoviesCardList;