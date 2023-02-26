import SearchIcn from '../icon/SearchIcn.svg'

import {SearchBtnStyle, SearchIcon} from '../../SearchStyles'

function SearchBtn({onClickHandler, searchBtnRef}): JSX.Element {
  return (
    <SearchBtnStyle type="submit" ref={searchBtnRef} onClick={onClickHandler}>
      <SearchIcon width={10} src={SearchIcn} alt="Rviewer logo" />
    </SearchBtnStyle>
  )
}

export default SearchBtn
