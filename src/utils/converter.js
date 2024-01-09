import { moviesApiSettings } from "./settings.js";

export default function converter (movie) {
  return {
    country: movie.country,
    director: movie.director,
    duration: movie.duration,
    year: movie.year,
    description: movie.description,
    image: `${moviesApiSettings.baseUrl}${movie.image.url}`,
    trailerLink: movie.trailerLink,
    thumbnail: `${moviesApiSettings.baseUrl}${movie.image.formats.thumbnail.url}`,
    movieId: movie.id,
    nameRU: movie.nameRU,
    nameEN: movie.nameEN,
  }
}