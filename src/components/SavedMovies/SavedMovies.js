import './SavedMovies.css';
import { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import mainApi from '../../utils/MainApi.js';


function SavedMovies ({handleMovieDelete}) {
  const [moviesSavedByUser, setMoviesSavedByUser ] = useState([])
  const [savedIds, setSavedIds ] = useState([])
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
  useEffect(() => {
    mainApi.getMovies()
      .then((movies) => {
        setMoviesSavedByUser(movies);
        setSavedIds(movies.map((movie) => movie.movieId));
      })
      .catch((err) => {console.log('Не удалось загрузить фильмы')})
    }, []);
  return (
    <main className="saved-movies">
      <SearchForm />
      <MoviesCardList
        movies={moviesSavedByUser}
        savedIds={savedIds}
        showSavedByUser={true}
        handleMovieDelete={onDelete}/>
    </main>
  )
}

export default SavedMovies;
