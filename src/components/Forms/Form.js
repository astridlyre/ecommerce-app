import { motion } from 'framer-motion'
import tw, { styled } from 'twin.macro'

const StyledForm = styled(motion.form)`
  ${tw`relative flex flex-col items-center w-full mt-4 rounded-sm`}
  @media (min-width:640px) {
    max-width: 400px;
  }
`

const Form = ({ children, onSubmit }) => (
  <StyledForm
    onSubmit={onSubmit}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}>
    {children}
  </StyledForm>
)

export default Form
