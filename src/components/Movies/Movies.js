import './Movies.css';

import Preloader from '../Preloader/Preloader.js'
import SearchForm from '../SearchForm/SearchForm.js';

function Movies () {
  return (
    <div className="movies">
      <SearchForm />
      <h1>Фильмы</h1>
      <Preloader />
    </div>
  )
}

export default Movies;