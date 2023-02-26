import {keyframes} from '@emotion/react'
import styled from '@emotion/styled'

export const Mover = keyframes`
  0% {
    background-color: #000000;
  }
  50% {
    background-color: #141414;
  }
  100% {
    background-color: #040002;
  }
`

export const MovieCardDiv = styled.div`
  max-height: 299px;
  overflow: hidden;

  position: relative;

  h2 {
    width: 200px;
    margin-bottom: 14px;

    white-space: nowrap;
    line-height: normal;
    line-height: 19px;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 10px;
    letter-spacing: 0.470588px;
  }
  p {
    display: none;
  }
  h3 {
    display: none;
  }

  &:hover {
    > div {
      bottom: 0px;
      height: 200px;
    }
    h2 {
      overflow: initial;
      text-overflow: initial;
      margin-right: 100px;
      white-space: initial;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    h3 {
      display: block;
      align-items: center;
      letter-spacing: 0.470588px;
    }
    p {
      display: block;
      align-items: center;
      letter-spacing: 0.470588px;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
    }
  }

  @media (min-width: 1200px) {
    max-width: 60vw;
  }
`

export const MovieCardInfo = styled.div`
  align-items: left;
  height: 48px;
  width: 224px;
  position: absolute;
  left: 0px;
  bottom: 0px;
  border-radius: 0px;
  background: #000000;
  mix-blend-mode: normal;
  opacity: 0.8;
  padding: 17px 14px 10px 14px;
  transition: all 0.3s ease-in-out;
  text-align: left;
  /* display: none; */
`

export const PosterLazyLoad = styled.div`
  margin: 0 auto;
  gap: 10px;
  height: 299px;
  width: 224px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 299px;
  color: white;
  overflow: hidden;
  background-color: #000000;
  transition: all;
  animation: ${Mover} 2s ease-in-out infinite;
`

export const Poster = styled.img`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 10px;
  height: 299px;
  color: white;
  overflow: hidden;
  background-color: #000000;
  transition: all;
`
