import './SavedMovies.css';
import dummyMovies from '../../utils/dummy-movies.js'
import Preloader from '../Preloader/Preloader.js'
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';

const moviesSavedByUser = dummyMovies.filter((movie) => movie.isSaved);

function SavedMovies () {
  return (
    <div className="movies">
      <SearchForm />
      <MoviesCardList movies={moviesSavedByUser} showSavedByUser={true} />
      <Preloader />
    </div>
  )
}

export default SavedMovies;
