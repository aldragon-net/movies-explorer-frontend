import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import './App.css';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import NotFound from '../NotFound/NotFound.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import mainApi from '../../utils/MainApi.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';


function App() {
  const navigate = useNavigate();
  const [ currentUser, setCurrentUser ] = useState({isAuthorized: false, name: '', email: ''});

  useEffect(() => {
    mainApi.getProfile()
      .then((res) => {
        setCurrentUser({isAuthorized: true, name: res.name, email: res.email});
      })
      .catch((err) => {console.log(`Ошибка связи с сервером: ${err.status}`)})
    }, [currentUser.isAuthorized]);

  const handleRegistration = (userData) => {
    mainApi.register({name: userData.name, email: userData.email, password: userData.password})
      .then(() => {
        setCurrentUser({ ...currentUser, isAuthorized: true});
        navigate('/movies', {replace: true});
      })
      .catch((err) => {
        console.log(`Ошибка регистрации: ${err.status}`);
      })
      .finally(() => {})
  }

  const handleLogin = (userData) => {
    console.log('Логин', userData.email, userData.password)
    mainApi.login({email: userData.email, password: userData.password})
      .then((res) => {
        setCurrentUser({ ...currentUser, isAuthorized: true});
        navigate('/movies', {replace: true});
      })
      .catch((err) => {
        console.log(`Ошибка входа: ${err.status}`);
      })
      .finally(() => {})
  }

  const handleLogout = () => {
    mainApi.logout()
      .then((res) => {
        setCurrentUser({isAuthorized: false, name: '', email: ''});
        localStorage.clear();
        navigate('/', {replace: true});
      })
      .catch((err) => {
        console.log(`Ошибка выхода: ${err}`);
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
                <Header />
                <Main />
                <Footer />
              </>
            } />
          <Route
            path="/movies"
            element={
              <ProtectedRoute isAuthorized={currentUser.isAuthorized}>
                <Header />
                <Movies />
                <Footer />
              </ProtectedRoute>
            } />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute isAuthorized={currentUser.isAuthorized}>
                <Header />
                <SavedMovies />
                <Footer />
              </ProtectedRoute>
            } />
          <Route
            path="/profile"
            element={
              <ProtectedRoute isAuthorized={currentUser.isAuthorized}>
                <Header />
                <Profile onLogout={handleLogout}/>
              </ProtectedRoute>
            } />
          <Route
            path="/signin"
            element={
              <Login onLogin={handleLogin} />
            } />
          <Route
            path="/signup"
            element={
              <Register onRegister={handleRegistration} />
            } />
          <Route
            path="*"
            element={
              <ProtectedRoute isAuthorized={currentUser.isAuthorized}>
                <NotFound />
              </ProtectedRoute>
            } />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
);
}

export default App;
