export default function filterMovies (movies, searchPattern, searchOnlyShort) {
  const re = new RegExp (searchPattern, "i");
  const filteredMovies = movies.filter(
    (movie) =>
      (movie.nameRU.match(re) || movie.nameEN.match(re))
      &&
      (!searchOnlyShort || movie.duration <= 40)
  );
  return filteredMovies
}
