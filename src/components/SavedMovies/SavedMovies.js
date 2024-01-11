import './SavedMovies.css';
import { useState, useEffect } from 'react';
import Preloader from '../Preloader/Preloader.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import mainApi from '../../utils/MainApi.js';
import filterMovies from '../../utils/filter.js';


function SavedMovies ({handleMovieDelete}) {
  const [searchPattern, setSearchPattern] = useState('');
  const [displayPreloader, setDisplayPreloader] = useState(false);
  const [searchOnlyShort, setSearchOnlyShort] = useState(false);
  const [moviesSavedByUser, setMoviesSavedByUser ] = useState([])
  const [moviesToShow, setMoviesToShow] = useState([]);
  const [savedIds, setSavedIds ] = useState([])
  const [message, setMessage] = useState('');

  const onDelete = (movie, onSuccess, onFail) => {
    handleMovieDelete(
      movie,
      () => {
        setMoviesSavedByUser(moviesSavedByUser.filter(m => m.movieId !== movie.movieId))
        setSavedIds(savedIds.filter(id => id !== movie.movieId));
        onSuccess();
      },
      onFail)
  }
  const handleSearch = (pattern, onlyShort) => {
    setSearchPattern(pattern);
    setSearchOnlyShort(onlyShort);
  }

  useEffect(() => {
    setDisplayPreloader(true);
    mainApi.getMovies()
      .then((movies) => {
        setMoviesSavedByUser(movies);
        setSavedIds(movies.map((movie) => movie.movieId));
      })
      .catch(() => {setMessage('Не удалось загрузить фильмы')})
      .finally(() => {setDisplayPreloader(false)})
    }, []);

  useEffect(() => {
    const filteredMovies = filterMovies(moviesSavedByUser, searchPattern, searchOnlyShort)
    setMoviesToShow(filteredMovies)
    setMessage((!searchPattern || filteredMovies.length > 0) ? '' : 'Ничего не найдено!')
  }, [moviesSavedByUser, searchPattern, searchOnlyShort])

  return (
    <main className="saved-movies">
      <SearchForm handleSearch={handleSearch} switchState={searchOnlyShort} value={searchPattern} />
      {displayPreloader && <Preloader />}
      {message &&
        <p className='saved-movies__message'>{message}</p>
      }
      <MoviesCardList
        movies={moviesToShow}
        savedIds={savedIds}
        showSavedByUser={true}
        handleMovieDelete={onDelete}/>
    </main>
  )
}

export default SavedMovies;
