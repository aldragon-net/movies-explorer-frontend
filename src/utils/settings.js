export const mainApiSettings = {
  baseUrl: 'https://api.diplodrakon.nomoredomainsmonster.ru',
  endpoints: {
    profile: '/users/me',
    movies: '/movies',
    registration: '/signup',
    login: '/signin',
    logout: '/signout',
  },
  headers: {
    'Content-Type': 'application/json'
  },
  credentials: 'include'
}

export const moviesApiSettings = {
  baseUrl: 'https://api.nomoreparties.co',
  endpoints: {
    movies: '/beatfilm-movies',
  }
}
