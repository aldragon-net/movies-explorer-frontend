import { moviesApiSettings } from './settings.js';

class MoviesApi {
  constructor ( {baseUrl, endpoints} ) {
    this._baseUrl = baseUrl;
    this._moviesEndpoint = this._baseUrl + endpoints.movies;
  }

  getMovies () {
    return fetch(this._moviesEndpoint, {method: 'GET'})
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject({ status: res.status, message: 'Ошибка получения фильмов' })
      })
  }
}

const moviesApi = new MoviesApi(moviesApiSettings);
export default moviesApi;
