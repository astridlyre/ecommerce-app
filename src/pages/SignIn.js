import tw, { styled } from 'twin.macro'
import PageContainer from '../containers/PageContainer'
import Cols from '../containers/Cols'
import Title from '../components/Text/Title'
import LabeledInput from '../components/Forms/LabeledInput'
import Button from '../components/Forms/Button'
import StyledP from '../components/Text/StyledP'
import Col from '../containers/Col'
import Form from '../components/Forms/Form'
import { useState } from 'react'
import { useField } from '../hooks/hooks'

const SecondaryButton = styled.button`
  ${tw`px-6 py-2 text-sm font-semibold rounded-sm cursor-pointer text-cadetblue-600 hover:bg-cadetblue-300`}
  transition: all 0.2s ease-out;
`

const StyledPage = styled.main`
  ${tw`w-full pt-24`}
  max-width: 400px;
`

const ButtonContainer = styled.div`
  ${tw`grid w-full grid-cols-1 gap-4 mt-8 md:grid-cols-2`}
`

const SignIn = () => {
  const [creatingAccount, setCreatingAccount] = useState(false)
  const [email, clearEmail] = useField('email')
  const [password, clearPassword] = useField('password')
  const [confirmPassword, clearConfirmPassword] = useField('password')

  const handleSubmit = event => {
    event.preventDefault()
    clearEmail()
    clearPassword()
    clearConfirmPassword()
  }

  return (
    <PageContainer>
      <StyledPage>
        <Cols number='1' gap='4' stack='md'>
          <Col>
            <Title>{creatingAccount ? 'Create Account' : 'Sign In'}</Title>
            <StyledP>
              Sign {creatingAccount ? 'up' : 'in'} with your email and password
            </StyledP>
          </Col>
          <Form onSubmit={handleSubmit}>
            <LabeledInput
              input={{ ...email, placeholder: 'you@example.com' }}
              text='Email'
            />
            <LabeledInput
              input={{ ...password, placeholder: 'Enter your password...' }}
              text='Password'
            />
            {creatingAccount && (
              <LabeledInput
                input={{
                  ...confirmPassword,
                  placeholder: 'Re-enter your password...',
                }}
                text='Confirm Password'
              />
            )}
            <ButtonContainer>
              <Button text={creatingAccount ? 'Create Account' : 'Sign In'} />
              <SecondaryButton
                type='button'
                onClick={() => setCreatingAccount(s => !s)}>
                {creatingAccount ? 'Cancel' : 'Create Account'}
              </SecondaryButton>
            </ButtonContainer>
          </Form>
        </Cols>
      </StyledPage>
    </PageContainer>
  )
}

export default SignIn
