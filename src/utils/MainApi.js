import { mainApiSettings } from './settings.js';

class MainApi {
  constructor ( {baseUrl, headers, credentials, endpoints} ) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._credentials = credentials
    this._registrationEndpoint = this._baseUrl + endpoints.registration;
    this._loginEndpoint = this._baseUrl + endpoints.login;
    this._logoutEndpoint = this._baseUrl + endpoints.logout;
    this._profileEndpoint = this._baseUrl + endpoints.profile;
    this._moviesEndpoint = this._baseUrl + endpoints.movies;
  }

  _getResponseOrError (endpoint, options) {
    const optionsWithCredentials = { ...options, credentials: this._credentials }
    return fetch(endpoint, optionsWithCredentials)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject({ status: res.status, message: 'Ошибка запроса' })
      })
  }

  register ({name, email, password}) {
    return this._getResponseOrError(
      this._registrationEndpoint,
      {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({name: name, email: email, password: password})
      }
    )
  }

  login ({email, password}) {
    return this._getResponseOrError(
      this._loginEndpoint,
      {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({email: email, password: password})
      }
    )
  }

  logout () {
    return fetch(
      this._logoutEndpoint,
      {
        method: 'POST',
        credentials: 'include',
        headers: this._headers,
      })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        return Promise.reject({ status: res.status, message: res.json()})
      })
  }

  getProfile () {
    return this._getResponseOrError(
      this._profileEndpoint,
      {
        method: 'GET',
      }
    )
  }

  updateProfile ( {name, email }) {
    return this._getResponseOrError(
      this._profileEndpoint,
      {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({name: name, email: email})
      }
    )
  }

  getMovies () {
    return this._getResponseOrError(
      this._moviesEndpoint,
      {
        method: 'GET',
      }
    )
  }

  saveMovie (movieData) {
    return this._getResponseOrError(
      this._moviesEndpoint,
      {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({movieData})
      }
    )
  }

  deleteMovie (movie_id) {
    return this._getResponseOrError(
      this._moviesEndpoint + `/${movie_id}`,
      {
        method: 'DELETE',
      }
    )
  }

}

const mainApi = new MainApi(mainApiSettings);
export default mainApi;
