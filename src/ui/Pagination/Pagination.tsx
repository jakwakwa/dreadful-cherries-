import {ArrowBtn, RoundBtn} from './buttons/PaginationBtns'
import {PaginationDiv} from './PaginationStyles'

export function Pagination({
  movies,
  currentPage,
  setCurrentPage,
  totalMovies,
  pageLimit,
}) {
  const pageCount = Math.ceil(totalMovies / pageLimit + 1)

  const pages = movies.length > 30 ? [] : [...Array(pageCount).keys()]

  const next = () => {
    setCurrentPage(currentPage + 1)
  }

  const prev = () => {
    setCurrentPage(currentPage - 1)
  }

  return (
    <PaginationDiv>
      {currentPage === 1 ? null : (
        <ArrowBtn
          direction="left"
          handlePageChange={() => prev()}
          currentPage={currentPage}
        />
      )}

      {pages.map(
        page =>
          page >= 1 && (
            <RoundBtn
              key={page}
              pageCount={page}
              handlePageChange={() => setCurrentPage(page)}
              currentPage={currentPage}
            />
          ),
      )}
      {movies.length > totalMovies ? null : currentPage !== pageCount - 1 ? (
        <ArrowBtn
          direction="right"
          handlePageChange={() => next()}
          currentPage={currentPage}
        />
      ) : null}
    </PaginationDiv>
  )
}
