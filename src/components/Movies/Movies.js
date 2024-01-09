import './Movies.css';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import moviesApi from '../../utils/MoviesApi.js';
import mainApi from '../../utils/MainApi.js';
import converter from '../../utils/converter.js';

import { useState, useEffect } from 'react';

function Movies ({handleMovieSave, handleMovieDelete}) {

  const [movies, setMovies] = useState([]);
  const [savedIds, setSavedIds] = useState([]);
  useEffect(() => {
    moviesApi.getMovies()
      .then((movies) => {
        const converted = movies.map((movie) => converter(movie));
        setMovies(converted);
        localStorage.setItem("movies", JSON.stringify(converted))
      })
      .catch((err) => {console.log(`Ошибка связи с сервером: ${err.status}`)})
    }, []);
  useEffect(() => {
    mainApi.getMovies()
      .then((movies) => {
        setSavedIds(movies.map((movie) => movie.movieId));
      })
      .catch((err) => {console.log(`Ошибка связи с сервером: ${err.status}`)})
    }, []);

  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList
        movies={movies}
        savedIds={savedIds}
        handleMovieSave={handleMovieSave}
        handleMovieDelete={handleMovieDelete} />
      <button className="movies__button" type="button">Ещё</button>
    </main>
  )
}

export default Movies;