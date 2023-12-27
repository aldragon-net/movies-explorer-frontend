import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

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

function App() {
  const [currentUser, setCurrentUser] = useState({name: 'Александр', email: 'alex@mail.net'});

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <><Header /><Main /><Footer /></>
            } />
          <Route
            path="/movies"
            element={
              <><Header /><Movies /><Footer /></>
            } />
          <Route
            path="/saved-movies"
            element={
              <><Header /><SavedMovies /><Footer /></>
            } />
          <Route
            path="/profile"
            element={
              <>
                <Header />
                <Profile />
              </>
            } />
          <Route
            path="/signin"
            element={
            <Login />
            } />
          <Route
            path="/signup"
            element={
              <>
                <Register />
              </>
            } />
          <Route
            path="*"
            element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
);
}

export default App;