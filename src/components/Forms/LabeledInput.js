import tw, { styled } from 'twin.macro'

const StyledLabel = styled.label`
  ${tw`flex flex-col w-full mb-2`}

  span {
    ${tw`inline-block w-full mb-1 text-sm font-semibold text-cadetblue-500`}
  }

  input {
    ${tw`inline-block w-full py-2 pl-3 pr-3 font-sans border text-cadetblue-800 focus:border-chocolate-300 hover:border-chocolate-300`}
    transition: all 0.2s ease-out;
    &[type='number'] {
      ${tw`pr-0`}
    }
  }

  textarea {
    ${tw`px-3 py-2 font-sans border text-cadetblue-800 focus:border-chocolate-300 hover:border-chocolate-300`}
    transition: all 0.2s ease-out;
    resize: none;
  }

  &:last-of-type {
    margin-bottom: 0rem !important;
  }
`

const LabeledInput = ({ input, text, tf = null }) => {
  if (tf) {
    return (
      <StyledLabel>
        <span>{text}</span>
        <textarea {...input} rows='5'></textarea>
      </StyledLabel>
    )
  }
  return (
    <StyledLabel>
      <span>{text}</span>
      <input {...input} />
    </StyledLabel>
  )
}

export default LabeledInput
