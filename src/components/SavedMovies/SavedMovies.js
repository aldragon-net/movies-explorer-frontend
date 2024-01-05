import './SavedMovies.css';
import dummyMovies from '../../utils/dummy-movies.js'
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';

const moviesSavedByUser = dummyMovies.filter((movie) => movie.isSaved);

function SavedMovies () {
  return (
    <main className="saved-movies">
      <SearchForm />
      <MoviesCardList movies={moviesSavedByUser} showSavedByUser={true} />
    </main>
  )
}

export default SavedMovies;
