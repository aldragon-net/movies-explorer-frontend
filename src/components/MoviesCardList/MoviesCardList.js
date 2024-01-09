import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList ({ movies, savedIds, showSavedByUser, handleMovieSave, handleMovieDelete }) {
  return (
    <ul className="movies-card-list">
      {movies.map((movie, i) => (
        <MoviesCard
          key={movie.movieId}
          movie={movie}
          inSaved={savedIds.includes(movie.movieId)}
          showSavedByUser={showSavedByUser}
          handleMovieSave={handleMovieSave}
          handleMovieDelete={handleMovieDelete} />
       ))}
    </ul>
  )
}

export default MoviesCardList;