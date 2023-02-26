import styled from '@emotion/styled'

export const SearchContainer = styled.div`
  align-items: center;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: calc(1rem + 1.5vmin);
  justify-content: center;
  margin: auto;
  max-width: 100vw;
  text-align: center;
  width: 100vw;
  background: #c42521;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.411765px;
  height: 66px;
`

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.411765px;
  box-sizing: border-box;
  appearance: none;
  outline: none;
  border: none;
  padding: 11px 45px;
  width: 1168px;
  height: 38px;
  background: #ffffff;
  border-radius: 5.57802px;
`

export const SearchIcon = styled.img`
  position: absolute;
  left: 14px;
  width: 24px;
  height: 24px;
`

export const SearchBtnStyle = styled.button`
  position: absolute;
  width: 24px;
  bottom: 18px;
  height: 24px;
  padding: 0%;
  margin: 0;
`
