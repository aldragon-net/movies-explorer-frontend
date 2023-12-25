import './Movies.css';
import dummyMovies from '../../utils/dummy-movies.js'
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';

function Movies () {
  return (
    <div className="movies">
      <SearchForm />
      <MoviesCardList movies={dummyMovies} />
      <button className="movies__button" type="button">Ещё</button>
    </div>
  )
}

export default Movies;