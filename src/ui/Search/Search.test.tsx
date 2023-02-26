import {render, screen} from '@testing-library/react'
import {Search} from './Search'

test('Search section', () => {
  render(<Search searchHandler={undefined} onClickHandler={undefined} />)
})
