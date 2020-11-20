import tw, { styled } from 'twin.macro'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ReactComponent as Cart } from '../cart.svg'

const StyledCart = styled(motion.span)`
  ${tw`relative z-0 inline-block p-1 my-8 rounded-sm cursor-pointer stroke-current text-cadetblue-700`}
`

const MobileMenuBg = styled(motion.div)`
  ${tw`absolute rounded-full content bg-chocolate-300 md:hidden`}
  right: -10rem;
  top: -20rem;
  height: 200vh;
  width: 150vh;
`
const StyledLink = styled(motion.a)`
  ${tw`relative z-0 inline-block my-8 text-3xl font-medium uppercase rounded-sm cursor-pointer text-cadetblue-700 font-display`}
  letter-spacing: -1px;
`

const Wrapper = styled(motion.div)`
  ${tw`fixed inset-0 z-40 flex flex-col items-center justify-center w-full h-full`}
`

const MobileBtn = styled(motion.a)`
  ${tw`fixed top-0 right-0 z-50 flex flex-col justify-between w-8 h-6 mr-8 cursor-pointer md:hidden`}
  margin-top: 2.5rem;

  &:after {
    ${tw`absolute rounded-full content bg-chocolate-50`}
    opacity: 0.75;
    height: 3.5rem;
    width: 3.5rem;
    top: 50%;
    bottom: 50%;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
`

const TopLine = styled(motion.div)`
  ${tw`w-full rounded-sm bg-cadetblue-700`}
  height: 4px;
`
const MiddleLine = styled(motion.div)`
  ${tw`w-full rounded-sm bg-cadetblue-700`}
  height: 4px;
`
const BottomLine = styled(motion.div)`
  ${tw`w-full rounded-sm bg-cadetblue-700`}
  height: 4px;
`

const MobileMenu = () => {
  const [menuActive, setMenuActive] = useState()
  const history = useHistory()

  const wrapper = {
    active: {
      opacity: 1,
      transition: { when: 'beforeChildren', staggerChildren: 0.1 },
    },
    notActive: {
      opacity: 0,
      transition: { when: 'afterChildren' },
    },
  }

  const top = {
    active: { x: -4, y: -1.5, rotate: -45, originX: 1 },
    notActive: { x: 0, y: 0, rotate: 0, originX: 1 },
  }
  const middle = {
    active: { x: -5, opacity: 0 },
    notActive: { x: 0, opacity: 1 },
  }
  const bottom = {
    active: { x: -4, y: 1.5, rotate: 45, originX: 1 },
    notActive: { x: 0, y: 0, rotate: 0, originX: 1 },
  }

  const link = {
    active: { opacity: 1, y: 0 },
    notActive: { opacity: 0, y: 20 },
  }

  const handleClick = dest => {
    setMenuActive(false)
    history.push(dest)
  }

  return (
    <AnimatePresence>
      <MobileBtn
        key='menu-btn'
        onClick={() => setMenuActive(s => !s)}
        initial='notActive'
        animate={menuActive ? 'active' : 'notActive'}>
        <TopLine variants={top} />
        <MiddleLine variants={middle} />
        <BottomLine variants={bottom} />
      </MobileBtn>
      {menuActive && (
        <Wrapper
          key='menu-wrapper'
          animate={menuActive ? 'active' : 'notActive'}
          initial='notActive'
          exit='notActive'
          variants={wrapper}>
          <MobileMenuBg
            key='menu-bg'
            animate={{ opacity: 0.95, scale: 1, originX: 1, originY: 0 }}
            initial={{ opacity: 0, scale: 0, originX: 1, originY: 0 }}
            exit={{ opacity: 0, scale: 0, originX: 1, originY: 0 }}
          />
          <StyledLink
            onClick={() => handleClick('/shop')}
            variants={link}
            exit='notActive'
            key='menu-item-1'>
            shop
          </StyledLink>
          <StyledLink
            onClick={() => handleClick('/contact')}
            variants={link}
            exit='notActive'
            key='menu-item-2'>
            contact
          </StyledLink>
          <StyledLink
            onClick={() => handleClick('/signin')}
            variants={link}
            exit='notActive'
            key='menu-item-3'>
            sign in
          </StyledLink>
          <StyledCart
            onClick={() => handleClick('/cart')}
            variants={link}
            exit='notActive'
            key='menu-item-4'>
            <Cart tw='w-10 h-10' />
          </StyledCart>
        </Wrapper>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu
