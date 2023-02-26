import rightArrow from '../icon/RightArrowPath.svg'
import leftArrow from '../icon/LeftArrowPath.svg'
import {ArrowBtnStyle, RoundBtnStyle} from './PaginationBtnsStyles'

export function ArrowBtn({direction, handlePageChange, currentPage}) {
  return (
    <ArrowBtnStyle onClick={() => handlePageChange(currentPage + 1)}>
      <img
        width={10}
        src={direction === 'right' ? rightArrow : leftArrow}
        alt="Rviewer logo"
        style={
          direction === 'right' ? {marginLeft: '10px'} : {marginRight: '10px'}
        }
      />
    </ArrowBtnStyle>
  )
}

export function RoundBtn({handlePageChange, currentPage, pageCount}) {
  return (
    <RoundBtnStyle
      key={pageCount}
      onClick={() => pageCount > 0 && handlePageChange(pageCount)}
    >
      <span className={currentPage === pageCount ? `active` : `inactive`}>
        {pageCount}
      </span>
    </RoundBtnStyle>
  )
}
