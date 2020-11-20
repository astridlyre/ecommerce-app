import tw, { styled } from 'twin.macro'
import { motion } from 'framer-motion'

const StyledCol = styled(motion.div)`
  ${tw`flex flex-col text-cadetblue-700`}
  align-items: ${props => props.align || 'start'};
`

const Col = ({ children, align }) => (
  <StyledCol
    align={align}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}>
    {children}
  </StyledCol>
)

export default Col
