import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList ({ movies, showSavedByUser }) {
  return (
    <ul className="movies-card-list">
      {movies.map((movie, i) => (
        <MoviesCard key={i} movie={movie} showSavedByUser={showSavedByUser} />
       ))}
    </ul>
  )
}

export default MoviesCardList;