export function sortMovieListByYear(moviesArray: any) {
  const sortedByYear = [...moviesArray].sort(
    (a, b) => b.releaseYear - a.releaseYear,
  )
  return [...sortedByYear]
}
