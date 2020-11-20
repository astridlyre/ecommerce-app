import tw, { styled } from 'twin.macro'

const StyledButton = styled.button`
  ${tw`px-6 py-2 text-sm font-semibold rounded-sm cursor-pointer bg-chocolate-300 text-cadetblue-800 hover:bg-cadetblue-300`}
  transition: all 0.2s ease-out;
`

const Button = ({ text = 'button', func = null, type = 'button' }) => (
  <StyledButton type={type} onClick={func}>
    {text}
  </StyledButton>
)

export default Button
