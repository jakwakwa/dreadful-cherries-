import logo from './assets/footer-logo.svg'
import appStore from './assets/apple-appstore.png'
import playStore from './assets/google-play.png'

import {
  FooterBtnWrapper,
  FooterStyle,
  FooterText,
  RviewerLogo,
} from './FooterStyle'

export function Footer() {
  return (
    <FooterStyle>
      <RviewerLogo width={206} src={logo} alt="Cherry Tomotoes logo" />
      <FooterBtnWrapper>
        <button>
          <a href="#">
            <img width={129} src={appStore} />
          </a>
        </button>
        <button>
          <a href="#">
            <img width={129} src={playStore} />
          </a>
        </button>
      </FooterBtnWrapper>
      <FooterText>
        © Copyright 2022 Dreadful Tomatoes. All rights reserved. Tomatoes
      </FooterText>
    </FooterStyle>
  )
}
