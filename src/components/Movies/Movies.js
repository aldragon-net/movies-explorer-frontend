import './Movies.css';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import moviesApi from '../../utils/MoviesApi.js';

import { useState, useEffect } from 'react';

function Movies () {

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    moviesApi.getMovies()
      .then((res) => {
        setMovies(res);
      })
      .catch((err) => {console.log(`Ошибка связи с сервером: ${err.status}`)})
    }, []);

  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList movies={movies} />
      <button className="movies__button" type="button">Ещё</button>
    </main>
  )
}

export default Movies;