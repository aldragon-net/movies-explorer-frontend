import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';


function MoviesCardList ({ movies, savedIds, showSavedByUser, handleMovieSave, handleMovieDelete }) {
  return (
    <ul className="movies-card-list">
      {movies.map((movie) => (
        <li key={movie.movieId} className="movies-card-list__item">
          <MoviesCard
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
