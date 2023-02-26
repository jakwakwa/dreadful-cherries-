import {useEffect, useRef, useState} from 'react'

import {
  MovieCardDiv,
  MovieCardInfo,
  Poster,
  PosterLazyLoad,
} from './MovieCardStyles'

export function MovieCard({title, description, posterArt, releaseYear}) {
  const inputEl = useRef(null)
  const [loaded, setLoaded] = useState(false)

  // mimic lazy loading
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 2000)
  }, [])

  return (
    <MovieCardDiv>
      {loaded ? (
        <Poster
          ref={inputEl}
          width={224}
          loading="lazy"
          src={posterArt.url}
          alt="movie poster"
        />
      ) : (
        <PosterLazyLoad />
      )}
      <MovieCardInfo>
        <h2>{title}</h2>
        <h3>{releaseYear}</h3>
        <p>{description}</p>
      </MovieCardInfo>
    </MovieCardDiv>
  )
}
