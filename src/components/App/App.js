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

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Main />
          } />
        <Route
          path="/movies"
          element={
            <Movies />
          } />
        <Route
          path="/saved-movies"
          element={
            <SavedMovies />
          } />
        <Route
          path="/profile"
          element={
            <>
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
      <Footer />
    </div>
);
}

export default App;