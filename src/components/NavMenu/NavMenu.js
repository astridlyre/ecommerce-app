import tw, { styled } from 'twin.macro'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import PageContainer from '../../containers/PageContainer'
import NavItem from './NavItem'
import NavCart from './NavCart'
import Logo from '../Logo/Logo'
import MobileMenu from './Mobile/MobileMenu'

const StyledNav = styled.nav`
  ${tw`fixed z-50 flex items-center justify-center w-full py-2`}
  transition: all 0.4s ease-out;

  &.add-bg {
    background-color: rgba(251, 249, 245, 0.75);
    transition: all 0.4s ease-out;
  }
`

const StyledNavContainer = styled.div`
  ${tw`relative items-center justify-between hidden w-full md:flex md:pl-2 md:w-2/3 lg:w-1/3`}
`

const NavContainer = styled.div`
  ${tw`flex items-center justify-between w-full`}
`

const HiddenOnMD = styled.div`
  ${tw`md:hidden`}
`

const NavMenu = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let timeout = null
    const checkScroll = () => {
      if (!timeout) {
        setScrolled(window.scrollY > 10)
        return
      } else {
        timeout = setTimeout(() => checkScroll, 500)
      }
    }
    window.addEventListener('scroll', checkScroll)
    return () => window.removeEventListener('scroll', checkScroll)
  }, [setScrolled])

  return (
    <StyledNav className={scrolled ? 'add-bg' : ''}>
      <PageContainer>
        <NavContainer>
          <Logo />
          <HiddenOnMD>
            <MobileMenu />
          </HiddenOnMD>
          <StyledNavContainer>
            <Link
              tw='outline-none text-cadetblue-700 focus:text-chocolate-800'
              to='/shop'>
              <NavItem>shop</NavItem>
            </Link>
            <Link
              tw='outline-none text-cadetblue-700 focus:text-chocolate-800'
              to='/contact'>
              <NavItem>contact</NavItem>
            </Link>
            <Link
              tw='outline-none text-cadetblue-700 focus:text-chocolate-800'
              to='/signin'>
              <NavItem>sign in</NavItem>
            </Link>
            <NavCart />
          </StyledNavContainer>
        </NavContainer>
      </PageContainer>
    </StyledNav>
  )
}

export default NavMenu
