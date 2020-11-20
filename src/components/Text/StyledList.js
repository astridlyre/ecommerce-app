import tw, { styled } from 'twin.macro'
import { motion, AnimatePresence } from 'framer-motion'

const StyledList = styled(motion.ul)`
  ${tw`flex flex-col`}
  align-items: ${props => props.align || 'start'};
`

const ListItem = styled(motion.li)`
  ${tw`font-semibold leading-relaxed text-cadetblue-700`}
`

const List = ({ items = [], align }) => {
  const ulV = {
    initial: {
      opacity: 0,
      transition: { when: 'afterChildren', staggerChildren: 0.1 },
    },
    after: {
      opacity: 1,
      transition: { when: 'beforeChildren', staggerChildren: 0.1 },
    },
  }

  const liV = {
    initial: { opacity: 0, x: -10 },
    after: { opacity: 1, x: 0 },
  }

  return (
    <AnimatePresence>
      <StyledList
        align={align}
        initial='initial'
        animate='after'
        variants={ulV}>
        {items.map((li, i) => (
          <ListItem key={i} variants={liV}>
            {li}
          </ListItem>
        ))}
      </StyledList>
    </AnimatePresence>
  )
}

export default List
