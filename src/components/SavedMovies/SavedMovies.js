import './SavedMovies.css';
import dummyMovies from '../../utils/dummy-movies.js'
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';

const moviesSavedByUser = dummyMovies.filter((movie) => movie.isSaved);

function SavedMovies () {
  return (
    <div className="movies">
      <SearchForm />
      <MoviesCardList movies={moviesSavedByUser} showSavedByUser={true} />
    </div>
  )
}

export default SavedMovies;
