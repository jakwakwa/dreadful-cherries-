import styled from '@emotion/styled'

const activeBg = `#ed4441;`
const inactiveBg = `rgba(196, 37, 33, 0.6);`

export const RoundBtnStyle = styled.button`
  transition: all 0.3s ease-in-out;
  .inactive,
  .active {
    overflow-y: hidden;
    border-radius: 100%;
    color: #ffffff;
    font-size: 12px;
    cursor: pointer;
    height: 32px;
    width: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${inactiveBg};
  }
  &:hover {
    opacity: 0.8;
  }
  .active {
    height: 36px;
    width: 36px;
    background-color: ${activeBg};
  }
  .inactive {
    background-color: ${inactiveBg};
  }
`

export const ArrowBtnStyle = styled.button`
  transition: all 0.3s ease-in-out;
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-top: 3px;
  &:hover {
    opacity: 0.8;
  }
`
