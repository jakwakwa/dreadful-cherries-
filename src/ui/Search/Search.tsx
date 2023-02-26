import SearchBtn from './input/Buttons/SearchBtn'
import {useRef} from 'react'
import {Input, InputWrapper, SearchContainer} from './SearchStyles'

export function Search({searchHandler, onClickHandler}) {
  const searchBtnRef = useRef<HTMLHeadingElement>(null)

  function onKeyPressHandler(e) {
    if (e.key === 'Enter') {
      if (searchBtnRef && searchBtnRef !== null) {
        searchBtnRef.current && searchBtnRef.current.click()
      }
    }
  }

  return (
    <SearchContainer>
      <InputWrapper>
        <Input
          type="text"
          placeholder="Search"
          onKeyPress={onKeyPressHandler}
          onChange={searchHandler}
        />

        <SearchBtn
          searchBtnRef={searchBtnRef}
          onClickHandler={onClickHandler}
        />
      </InputWrapper>
    </SearchContainer>
  )
}
