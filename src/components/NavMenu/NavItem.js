import tw, { styled } from 'twin.macro'
import { keyframes } from 'styled-components'

const ul = keyframes`
  0% {
    width: 0;
  }
  95% {
    width: 108%;
  }
  100% {
    width: 101%;
  }
`
const StyledLink = styled.span`
  ${tw`relative z-0 inline-block text-lg font-thin uppercase rounded-sm outline-none cursor-pointer font-display`}
  letter-spacing: -1px;

  &.active {
    ${tw`text-cadetblue-900`}
  }

  &:after {
    ${tw`absolute content bg-chocolate-300`}
    left: -1%;
    bottom: -0.15rem;
    height: 0.5rem;
    width: 0;
    transform: skewX(-10deg);
    transition: all 0.2s ease-out;
    z-index: -1;
  }

  &:hover:after {
    width: 102%;
    animation: ${ul} 0.2s ease-out;
  }
`

const NavItem = ({ children }) => <StyledLink>{children}</StyledLink>

export default NavItem
