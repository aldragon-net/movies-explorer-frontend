import './Movies.css';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Preloader from '../Preloader/Preloader.js';
import moviesApi from '../../utils/MoviesApi.js';
import mainApi from '../../utils/MainApi.js';
import converter from '../../utils/converter.js';

import { useState, useEffect } from 'react';

function Movies ({handleMovieSave, handleMovieDelete}) {

  const [searchPattern, setSearchPattern] = useState('');
  const [displayPreloader, setDisplayPreloader] = useState(false);
  const [searchOnlyShort, setSearchOnlyShort] = useState(false);

  const [message, setMessage] = useState('');
  const [moviesToShow, setMoviesToShow] = useState([]);
  const [savedIds, setSavedIds] = useState([]);
  const handleSearch = (pattern, onlyShort) => {
    setSearchPattern(pattern);
    setSearchOnlyShort(onlyShort);
  };

  useEffect(() => {
    setMoviesToShow([]);
    setMessage('');
    if (searchPattern) {
      setDisplayPreloader(true);
      moviesApi.getMovies()
      .then((movies) => {
        const convertedMovies = movies.map((movie) => converter(movie));
        return convertedMovies
      })
      .then((movies) => {
        localStorage.setItem("movies", JSON.stringify(movies));
        const filteredMovies = movies.filter((movie) => movie.nameRU.includes(searchPattern) && (!searchOnlyShort || movie.duration <= 40));
        return filteredMovies
      })
      .then((movies) => {
        setMoviesToShow(movies);
        setMessage(movies.length > 0 ? '' : 'Ничего не найдено!')
      })
      .catch((err) => {setMessage(`Ошибка связи с сервером: ${err.status}`)})
      .finally(() => setDisplayPreloader(false));
    }
  }, [searchPattern, searchOnlyShort])

  useEffect(() => {
    mainApi.getMovies()
      .then((movies) => {
        setSavedIds(movies.map((movie) => movie.movieId));
      })
      .catch((err) => {setMessage(`Ошибка связи с сервером: ${err.status}`)})
    }, []);

  return (
    <main className="movies">
      <SearchForm handleSearch={handleSearch} />
      {displayPreloader && <Preloader />}
      {message &&
        <p className='movies__message'>{message}</p>
      }
      {moviesToShow.length > 0 &&
        <>
        <MoviesCardList
          movies={moviesToShow}
          savedIds={savedIds}
          handleMovieSave={handleMovieSave}
          handleMovieDelete={handleMovieDelete} />
        <button className="movies__button" type="button">Ещё</button>
      </>}
    </main>
  )
}

export default Movies;