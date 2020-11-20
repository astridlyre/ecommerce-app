import tw, { styled } from 'twin.macro'
import { keyframes } from 'styled-components'
import { ReactComponent as Cart } from './cart.svg'
import { Link } from 'react-router-dom'

const cartbg = keyframes`
  0% {
    width: 0;
  }
  95% {
    width: 130%;
  }
  100% {
    width: 120%;
  }
`

const StyledCart = styled.span`
  ${tw`relative z-0 inline-block w-8 h-8 p-1 rounded-sm cursor-pointer stroke-current`}

  &:after {
    ${tw`absolute content bg-chocolate-300`}
    z-index: -1;
    left: -10%;
    top: -5%;
    width: 0;
    height: 110%;
    transform: skewX(-10deg);
    transition: all 0.2s ease-out;
  }

  &:hover:after,
  &:focus:after {
    width: 120%;
    animation: ${cartbg} 0.2s ease-out;
  }
`

const NavCart = () => (
  <Link
    to='/cart'
    tw='outline-none text-cadetblue-700 focus:text-chocolate-700'>
    <StyledCart>
      <Cart />
    </StyledCart>
  </Link>
)

export default NavCart
