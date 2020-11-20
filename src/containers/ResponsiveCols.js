import tw, { styled } from 'twin.macro'
import { motion } from 'framer-motion'

const StyledCols = styled(motion.div)`
  ${tw`grid grid-cols-1 row-gap-4 col-gap-4 mb-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}
  &::last-child {
    margin-bottom: 0;
  }
`

const Cols = ({ animate, variants, initial, children }) => (
  <StyledCols animate={animate} variants={variants} initial={initial}>
    {children}
  </StyledCols>
)

export default Cols
