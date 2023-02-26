import {render, screen} from '@testing-library/react'
import {MovieCard} from './MovieCard'

test('Movie Card section', () => {
  render(
    <MovieCard
      title={undefined}
      description={undefined}
      posterArt={undefined}
      releaseYear={undefined}
    />,
  )
})
