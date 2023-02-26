import {Search} from '../ui/Search'
import {useEffect, useState} from 'react'
import {MovieCard} from '../ui/MovieCard'
import {Pagination} from '../ui/Pagination'
import {FaSpinner} from 'react-icons/fa'
import {Movie} from './types/Movie'
import {sortMovieListByYear} from './helper/sortMovieListByYear'
import {
  Gallery,
  Home,
  LoadingSpinner,
  Results,
  Spinner,
  Wrap,
} from './MovieGalleryStyles'

export function MovieGallery({url}: {url: string}): JSX.Element {
  const [movies, setMovies] = useState<Movie[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([])
  const [searchActive, setSearchActive] = useState(false)
  const [loading, setLoading] = useState(false)
  const [querySearch, setQuerySearch] = useState('')
  const pageLimit = 10

  function onSearchHandler(e: {
    preventDefault: () => void
    target: {value: string}
  }): void {
    e.preventDefault()
    const query = e.target.value
    setQuerySearch(e.target.value)
    setSearchActive(false)

    const filteredMovies = movies.filter((movie): boolean => {
      return movie.title.toLowerCase().includes(query.toLowerCase())
    })

    setFilteredMovies(filteredMovies)
  }

  function onClickHandler(e: {
    preventDefault: () => void
    target: {value: string}
  }) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setCurrentPage(1)
      setSearchActive(true)
    }, 1000)
  }

  let moviesToShow: Movie[]
  if (!searchActive) {
    moviesToShow = movies.slice(
      (currentPage - 1) * pageLimit,
      currentPage * pageLimit,
    )
  } else {
    moviesToShow = filteredMovies.slice(
      (currentPage - 1) * pageLimit,
      currentPage * pageLimit,
    )
  }

  useEffect((): void => {
    if (!url) {
      return
    }

    window
      .fetch(url)
      .then(response => response.json())
      .then(json => {
        const sortedMovieList: Movie[] = sortMovieListByYear(json.entries)
        setMovies(sortedMovieList)
      })
  }, [url])

  if (!movies) {
    return <div role="alert">There was an error: </div>
  } else {
    return (
      <>
        <Search
          searchHandler={onSearchHandler}
          onClickHandler={onClickHandler}
        />

        {!loading ? (
          <Home>
            <h1>Popular Movies</h1>
            {searchActive ? (
              <Results>
                Results for "{querySearch !== '' ? querySearch : 'all'}"
              </Results>
            ) : null}
            <Gallery>
              {movies || !loading
                ? moviesToShow.map((movie: Movie) => (
                    <MovieCard
                      key={movie.id}
                      title={movie.title}
                      description={movie.description}
                      releaseYear={movie.releaseYear}
                      posterArt={movie.images.posterArt}
                    />
                  ))
                : null}
            </Gallery>
            <Pagination
              movies={movies}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalMovies={searchActive ? filteredMovies.length : movies.length}
              pageLimit={pageLimit}
            />
          </Home>
        ) : (
          <Wrap>
            <LoadingSpinner>
              <Spinner>
                <FaSpinner />
              </Spinner>
            </LoadingSpinner>
          </Wrap>
        )}
      </>
    )
  }
}
