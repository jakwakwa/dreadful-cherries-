import {keyframes} from '@emotion/react'
import styled from '@emotion/styled'

export const Spin = keyframes`
  0% {
    transform: rotatde(0deg);
}
  100% {
    transform: rotate(360deg);
}
`

export const AppStyle = styled.div`
  background: #1a1a1a;
  min-height: 100vh;
`

export const NoFoundMovies = styled.div`
  text-align: center;
  color: aliceblue;
  height: 100vh;
`

export const LoadingSpinner = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  width: 100vw !important;
  color: white;
  top: 10%;
  height: 100px;
  background-color: #1a1a1a;
`

export const Results = styled.div`
  text-align: left;
  font-size: 21px;
  font-weight: 400;
  padding: 10px;
  opacity: 0.8;
  padding-left: 0;
`
export const Spinner = styled.div`
  transition: all;
  animation: ${Spin} 1s linear infinite;

  svg {
    transform: scale(3);
    opacity: 0.5;
  }
`

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #1a1a1a;
`

export const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: left;
  gap: 12px;
  width: 100%;
  padding: 0rem 0rem;
  margin: 0;
  flex-direction: row;
  align-content: left;
  justify-content: left;
`

export const Home = styled.div`
  align-items: stretch;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: calc(1rem + 1.5vmin);
  text-align: center;
  width: 100%;
  font-family: 'Roboto';
  font-style: normal;

  font-weight: 700;
  font-size: 24px;
  text-align: left;

  line-height: 28px;
  color: #ffffff;

  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  width: 100%;
  padding: 0rem 8rem;
  flex-direction: column;
  justify-content: left;
  @media (max-width: 1200px) {
    flex-direction: row;
    padding: 0rem 0rem;
  }
`
