import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import NotFound from '../NotFound/NotFound.js';
import mainApi from '../../utils/MainApi.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import { errorStatusToMessage } from '../../utils/messages.js';


function App() {

  const navigate = useNavigate();
  const [ authorizationCompleted, setAuthorizationCompleted ] = useState(false);
  const [ isAuthorized, setIsAuthorized ] = useState(false);
  const [ currentUser, setCurrentUser ] = useState({name: '', email: ''});

  useEffect(() => {
    setAuthorizationCompleted(false);
    mainApi.getProfile()
      .then((res) => {
        setIsAuthorized(true);
        setCurrentUser({name: res.name, email: res.email});
      })
      .catch(() => {
        setCurrentUser({name: '', email: ''});
      })
      .finally(() => setAuthorizationCompleted(true))
    }, [isAuthorized]);

  const handleRegistration = (userData, onFail) => {
    mainApi.register({name: userData.name, email: userData.email, password: userData.password})
      .then(() => {
        handleLogin({email: userData.email, password: userData.password}, onFail)
      })
      .catch((err) => {
        onFail(errorStatusToMessage.registration[err.status])
      })
  }

  const handleProfileUpdate = (userData, onSuccess, onFail) => {
    mainApi.updateProfile({name: userData.name, email: userData.email})
      .then((res) => {
        setCurrentUser({name: res.name, email: res.email});
        onSuccess();
      })
      .catch((err) => {
        onFail(errorStatusToMessage.profileUpdate[err.status])
      })
  }

  const handleLogin = (userData, onFail) => {
    mainApi.login({email: userData.email, password: userData.password})
      .then(() => {
        setIsAuthorized(true);
        navigate('/movies', {replace: true});
      })
      .catch((err) => {
        onFail(errorStatusToMessage.login[err.status])
      })
  }

  const handleLogout = (onFail) => {
    mainApi.logout()
      .then(() => {
        setIsAuthorized(false);
        localStorage.clear();
        navigate('/', {replace: true});
      })
      .catch((err) => {
        onFail(errorStatusToMessage.default[err.status])
      })
  }

  const handleMovieSave = (movieData, onSuccess, OnFail) => {
    mainApi.saveMovie(movieData)
      .then((res) => {
        onSuccess(res);
      })
      .catch((err) => {
        OnFail(err);
      })
  }
  const handleMovieDelete = (movieData, onSuccess, OnFail) => {
    mainApi.getMovies()
      .then((movies) => {
        const movieToDelete = movies.find(movie => movie.movieId === movieData.movieId);
        return movieToDelete
      })
      .then((movie) => {
        mainApi.deleteMovie(movie._id)
          .then((res) => {
            onSuccess(res);
          })
          .catch((err) => {
            OnFail(err);
          })
      })
      .catch((err) => {
        OnFail(err);
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header isAuthorized={isAuthorized} />
                <Main />
                <Footer />
              </>
            } />
          <Route
            path="/movies"
            element={
              <ProtectedRoute isReady={authorizationCompleted} isAuthorized={isAuthorized}>
                <Header isAuthorized={isAuthorized} />
                <Movies
                  handleMovieSave={handleMovieSave}
                  handleMovieDelete={handleMovieDelete} />
                <Footer />
              </ProtectedRoute>
            } />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute isReady={authorizationCompleted} isAuthorized={isAuthorized}>
                <Header isAuthorized={isAuthorized} />
                <SavedMovies
                  handleMovieSave={handleMovieSave}
                  handleMovieDelete={handleMovieDelete}/>
                <Footer />
              </ProtectedRoute>
            } />
          <Route
            path="/profile"
            element={
              <ProtectedRoute isReady={authorizationCompleted} isAuthorized={isAuthorized}>
                <Header isAuthorized={isAuthorized}/>
                <Profile
                  onUpdate={handleProfileUpdate}
                  onLogout={handleLogout} />
              </ProtectedRoute>
            } />
          <Route
            path="/signin"
            element={
              <ProtectedRoute
                isReady={authorizationCompleted}
                isAuthorized={isAuthorized}
                rejectAuthorized={true}
                redirectPath='/movies' >
                <Login onLogin={handleLogin} />
              </ProtectedRoute>
            } />
          <Route
            path="/signup"
            element={
              <ProtectedRoute
                isReady={authorizationCompleted}
                isAuthorized={isAuthorized}
                rejectAuthorized={true}
                redirectPath='/movies' >
                <Register onRegister={handleRegistration} />
              </ProtectedRoute>
            } />
          <Route
            path="*"
            element={
              <ProtectedRoute isReady={authorizationCompleted} isAuthorized={isAuthorized}>
                <NotFound />
              </ProtectedRoute>
            } />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
);
}

export default App;
