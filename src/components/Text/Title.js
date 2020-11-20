import tw, { styled } from 'twin.macro'
import { motion } from 'framer-motion'

const Heading = styled(motion.h1)`
  ${tw`z-10 text-5xl font-bold font-display text-cadetblue-600`}
  letter-spacing: -1px;
`

const Title = ({ children }) => (
  <Heading initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
    {children}
  </Heading>
)

export default Title
