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
  const [ isAuthorized, setIsAuthorized ] = useState(false);
  const [ currentUser, setCurrentUser ] = useState({name: '', email: ''});
  const [ formErrorMessage, setFormErrorMessage ] = useState('');

  useEffect(() => {
    mainApi.getProfile()
      .then((res) => {
        setIsAuthorized(true);
        setCurrentUser({name: res.name, email: res.email});
      })
      .catch((err) => {setCurrentUser({name: '', email: ''})})
    }, [isAuthorized]);

  const handleRegistration = (userData) => {
    mainApi.register({name: userData.name, email: userData.email, password: userData.password})
      .then((res) => {
        setIsAuthorized(true);
        navigate('/movies', {replace: true});
        setFormErrorMessage('');
      })
      .catch((err) => {
        setFormErrorMessage(err.status)
      })
      .finally(() => {})
  }

  const handleProfileUpdate = (userData, onSuccess) => {
    mainApi.updateProfile({name: userData.name, email: userData.email})
      .then((res) => {
        setCurrentUser({name: res.name, email: res.email});
        setFormErrorMessage('');
        onSuccess();
      })
      .catch((err) => {
        setFormErrorMessage(err.status)
      })
      .finally(() => {})
  }

  const handleLogin = (userData) => {
    mainApi.login({email: userData.email, password: userData.password})
      .then((res) => {
        setIsAuthorized(true);
        navigate('/movies', {replace: true});
        setFormErrorMessage('');
      })
      .catch((err) => {
        setFormErrorMessage(err.status)
      })
      .finally(() => {})
  }

  const handleLogout = () => {
    mainApi.logout()
      .then((res) => {
        setIsAuthorized(false);
        localStorage.clear();
        navigate('/', {replace: true});
      })
      .catch((err) => {
        setFormErrorMessage(err.status)
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
              <ProtectedRoute isAuthorized={isAuthorized}>
                <Header isAuthorized={isAuthorized} />
                <Movies />
                <Footer />
              </ProtectedRoute>
            } />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute isAuthorized={isAuthorized}>
                <Header isAuthorized={isAuthorized} />
                <SavedMovies />
                <Footer />
              </ProtectedRoute>
            } />
          <Route
            path="/profile"
            element={
              <ProtectedRoute isAuthorized={isAuthorized}>
                <Header isAuthorized={isAuthorized}/>
                <Profile
                  onUpdate={handleProfileUpdate}
                  onLogout={handleLogout}
                  errorMessage={formErrorMessage} />
              </ProtectedRoute>
            } />
          <Route
            path="/signin"
            element={
              <Login onLogin={handleLogin} errorMessage={formErrorMessage} />
            } />
          <Route
            path="/signup"
            element={
              <Register onRegister={handleRegistration} errorMessage={formErrorMessage} />
            } />
          <Route
            path="*"
            element={
              <ProtectedRoute isAuthorized={isAuthorized}>
                <NotFound />
              </ProtectedRoute>
            } />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
);
}

export default App;
