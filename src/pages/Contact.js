import tw, { styled } from 'twin.macro'
import { motion } from 'framer-motion'
import { useField } from '../hooks/hooks'

import PageContainer from '../containers/PageContainer'
import Title from '../components/Text/Title'
import Cols from '../containers/Cols'
import fashion from '../assets/img/fashion-group.jpg'
import Col from '../containers/Col'
import StyledP from '../components/Text/StyledP'
import LabeledInput from '../components/Forms/LabeledInput'
import Button from '../components/Forms/Button'
import Form from '../components/Forms/Form'

const StyledPage = styled.main`
  ${tw`relative w-full pt-24`}
`

const Splash = styled.div`
  ${tw`absolute bg-hotpink-400`}
  right: 0;
  width: 70vh;
  height: 70vh;
  /* border-radius: 50%; */
  transform: skewX(-30deg) rotate(5deg);
  z-index: -1;
  opacity: 0.25;
`

const ButtonContainer = styled.div`
  ${tw`grid w-full grid-cols-1 mt-4 sm:grid-cols-2`}
`

const StyledImg = styled(motion.div)`
  ${tw`relative z-0 object-cover w-full overflow-hidden rounded-sm`}
  clip-path: polygon(8% 9%, 100% 0%, 91% 92%, 0 100%);
  max-height: 50vh;

  &:after {
    ${tw`absolute inset-0 opacity-25 content bg-cadetblue-500`}
  }

  & img {
    ${tw`object-cover w-full h-full`}
  }
`

const Contact = () => {
  const [name, clearName] = useField('text')
  const [email, clearEmail] = useField('email')
  const [subject, clearSubject] = useField('text')
  const [message, clearMessage] = useField('text')

  const handleSubmit = event => {
    event.preventDefault()
    clearName()
    clearEmail()
    clearSubject()
    clearMessage()
  }

  return (
    <PageContainer>
      <StyledPage>
        <Splash />
        <Title>Contact</Title>
        <Cols number='2' gap='4' stack='md'>
          <Col>
            <StyledP>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
              libero, tempore nam id nostrum excepturi sint quia. Optio,
              repudiandae!
            </StyledP>
            <Form onSubmit={handleSubmit}>
              <LabeledInput
                input={{ ...name, placeholder: 'Your name...' }}
                text='Name'
              />
              <LabeledInput
                input={{ ...email, placeholder: 'you@example.com' }}
                text='Email'
              />
              <LabeledInput
                input={{ ...subject, placeholder: 'What can we help with?' }}
                text='Subject'
              />
              <LabeledInput
                input={{ ...message, placeholder: 'The details...' }}
                text='Message'
                tf={true}
              />
              <ButtonContainer>
                <Button text='Send Message' type='submit'></Button>
              </ButtonContainer>
            </Form>
          </Col>
          <StyledImg
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -10 }}>
            <img src={fashion} alt='victory fashion group' />
          </StyledImg>
        </Cols>
      </StyledPage>
    </PageContainer>
  )
}

export default Contact
