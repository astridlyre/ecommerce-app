import { withRouter } from 'react-router-dom'
import tw, { styled } from 'twin.macro'
import { ReactComponent as LogoSVG } from './logo.svg'

const StyledLogo = styled.button`
  ${tw`relative z-0 w-32 cursor-pointer md:mb-2 md:w-24`}

  & .logo-triangle {
    ${tw`fill-current text-chocolate-300`}
  }

  & .logo-text {
    ${tw`fill-current text-cadetblue-700`}
  }
`

const Logo = ({ history }) => (
  <StyledLogo onClick={() => history.push('/')}>
    <LogoSVG />
  </StyledLogo>
)

export default withRouter(Logo)
