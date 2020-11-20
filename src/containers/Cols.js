import tw, { styled } from 'twin.macro'
import { motion } from 'framer-motion'

const StyledCols = styled(motion.div)`
  ${tw`grid mb-4`}
  grid-template-columns: repeat(${props => props.number}, 1fr);
  grid-template-rows: auto;
  row-gap: ${props => props.gap * 0.25}rem;
  column-gap: ${props => props.gap * 0.25}rem;
  &::last-child {
    margin-bottom: 0;
  }
  @media (max-width: ${props => {
      if (props.stack === 'sm') {
        return 639
      } else if (props.stack === 'md') {
        return 767
      } else if (props.stack === 'lg') {
        return 1024
      }
    }}px) {
    grid-template-columns: 1fr;
  }
`

const Cols = ({ animate, variants, initial, number, stack, gap, children }) => (
  <StyledCols
    animate={animate}
    variants={variants}
    initial={initial}
    number={number}
    stack={stack}
    gap={gap}>
    {children}
  </StyledCols>
)

export default Cols
