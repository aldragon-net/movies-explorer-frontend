import './Movies.css';
import { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Preloader from '../Preloader/Preloader.js';
import moviesApi from '../../utils/MoviesApi.js';
import mainApi from '../../utils/MainApi.js';
import converter from '../../utils/converter.js';
import filterMovies from '../../utils/filter.js';
import { SCREEN, MOVIES, INCREMENT } from '../../utils/screen-config.js';

function Movies ({handleMovieSave, handleMovieDelete}) {

  const stashedPattern = localStorage.getItem("pattern") ? JSON.parse(localStorage.getItem("pattern")) : '';
  const stashedSwitchState = localStorage.getItem("onlyShort") ? JSON.parse(localStorage.getItem("onlyShort")) : false;
  const stashedMovies = localStorage.getItem("moviesToShow") ? JSON.parse(localStorage.getItem("moviesToShow")) : [];
  const [moviesToShow, setMoviesToShow] = useState(stashedMovies);
  const [searchPattern, setSearchPattern] = useState(stashedPattern);
  const [searchOnlyShort, setSearchOnlyShort] = useState(stashedSwitchState);

  const [numberOfMoviesToDisplay, setNumberOfMoviesToDisplay] = useState(6);
  const [increment, setIncrement] = useState(3);
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [savedIds, setSavedIds] = useState([]);
  const [displayPreloader, setDisplayPreloader] = useState(false);
  const [message, setMessage] = useState('');

  const handleSearch = (pattern, onlyShort) => {
    setSearchPattern(pattern);
    localStorage.setItem("pattern", JSON.stringify(pattern));
    setSearchOnlyShort(onlyShort);
    localStorage.setItem("onlyShort", JSON.stringify(onlyShort));
  };

  const incrementMovies = () => {
    setNumberOfMoviesToDisplay(numberOfMoviesToDisplay + increment)
  }
  const changeDisplayMode = () => {
    const w = window.innerWidth;
    if (w >= SCREEN.WIDE) {
      setNumberOfMoviesToDisplay(MOVIES.WIDE);
      setIncrement(INCREMENT.WIDE);
    } else {
      if (w >= SCREEN.MEDIUM) {
        setNumberOfMoviesToDisplay(MOVIES.MEDIUM);
        setIncrement(INCREMENT.MEDIUM);
      } else {
        setNumberOfMoviesToDisplay(MOVIES.MOBILE);
        setIncrement(INCREMENT.MOBILE);
      }
    }
  }

  const getMoviesBase = () => {
    if (localStorage.getItem("moviesBase")) {
      return Promise.resolve(JSON.parse(localStorage.getItem("moviesBase")))
    } else {
      return moviesApi.getMovies().then(
        (movies) => {
          const convertedMovies = movies.map((movie) => converter(movie));
          return convertedMovies
        })
        .then((movies) => {
          localStorage.setItem("moviesBase", JSON.stringify(movies));
          return movies
        })
    }
  };

  useEffect(() => {
    setMessage('');
    if (searchPattern) {
      setDisplayPreloader(true);
      getMoviesBase()
        .then((movies) => filterMovies(movies, searchPattern, searchOnlyShort))
        .then((movies) => {
          setMoviesToShow(movies);
          localStorage.setItem("moviesToShow", JSON.stringify(movies));
          changeDisplayMode();
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
    }, [moviesToShow]);

  useEffect(() => {
    setDisplayedMovies(moviesToShow.slice(0, numberOfMoviesToDisplay))
    }, [moviesToShow, numberOfMoviesToDisplay]);

  useEffect(() => {
    let timer;
    function handleResize () {
      clearTimeout(timer);
      timer = setTimeout(changeDisplayMode, 500);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className="movies">
      <SearchForm handleSearch={handleSearch} switchState={searchOnlyShort} value={searchPattern} />
      {displayPreloader && <Preloader />}
      {message && <p className='movies__message'>{message}</p>}
      {moviesToShow.length > 0 &&
        <>
          <MoviesCardList
            movies={displayedMovies}
            savedIds={savedIds}
            handleMovieSave={handleMovieSave}
            handleMovieDelete={handleMovieDelete} />
          {moviesToShow.length > numberOfMoviesToDisplay &&
            <button className="movies__button" type="button" onClick={incrementMovies}>Ещё</button>
          }
        </>
      }
    </main>
  )
}

export default Movies;
