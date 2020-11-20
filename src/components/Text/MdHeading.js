import tw, { styled } from 'twin.macro'
import { motion } from 'framer-motion'

const StyledHeading = styled(motion.h4)`
  ${tw`w-full mb-2 text-2xl font-bold uppercase font-display text-cadetblue-600`}
`

const MdHeading = ({ children }) => (
  <StyledHeading
    animate={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: -10 }}>
    {children}
  </StyledHeading>
)

export default MdHeading
