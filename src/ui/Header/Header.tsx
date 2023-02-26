import logo from '../../logo.svg'
import {HeaderDiv, RviewerLogo} from './HeaderStyles'

export function Header() {
  return (
    <HeaderDiv>
      <RviewerLogo width={249} src={logo} alt="Cherry Tomotoes logo" />
    </HeaderDiv>
  )
}
