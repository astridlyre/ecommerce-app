import tw, { styled } from 'twin.macro'
import { motion } from 'framer-motion'

const StyledPara = styled(motion.p)`
  ${tw`mt-4 text-sm leading-relaxed font-display text-cadetblue-700`}
  letter-spacing: -1px;

  &:first-of-type {
    margin-top: 0;
  }
`

const StyledP = ({ children }) => (
  <StyledPara animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -10 }}>
    {children}
  </StyledPara>
)

export default StyledP
