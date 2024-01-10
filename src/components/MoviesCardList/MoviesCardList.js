import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList ({ movies, savedIds, showSavedByUser, handleMovieSave, handleMovieDelete }) {
  console.log('сохраненные', savedIds)
  const moviesIds = movies.map((movie) => ({id: movie.movieId, in: savedIds.includes(movie.movieId)}))
  console.log('ID фильмов', moviesIds)
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