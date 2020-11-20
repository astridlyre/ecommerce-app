import tw, { styled } from 'twin.macro'
import { useField } from '../hooks/hooks'
import { motion } from 'framer-motion'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'
import SHOP_DATA from '../state'

import PageContainer from '../containers/PageContainer'
import Title from '../components/Text/Title'
import Cols from '../containers/Cols'
import Col from '../containers/Col'
import StyledP from '../components/Text/StyledP'
import Button from '../components/Forms/Button'
import MdHeading from '../components/Text/MdHeading'
import Form from '../components/Forms/Form'

const StyledPage = styled.main`
  ${tw`relative w-full pt-24`}
`

const Splash = styled.div`
  ${tw`absolute bg-mediumorchid-500`}
  width: 50vh;
  height: 50vh;
  /* border-radius: 50%; */
  transform: skewX(-30deg) rotate(5deg);
  z-index: -1;
  opacity: 0.25;
`

const ButtonContainer = styled.div`
  ${tw`grid w-full grid-cols-1 row-gap-4 col-gap-4 sm:grid-cols-2`}
`

const StyledImg = styled(motion.div)`
  ${tw`relative z-0 object-cover w-full overflow-hidden rounded-sm`}
  clip-path: polygon(5% 2%, 90% 0, 100% 94%, 0 100%);
  max-height: 50vh;

  &:after {
    ${tw`absolute inset-0 opacity-25 content bg-cadetblue-500`}
  }

  & img {
    ${tw`object-cover w-full h-full`}
  }
`

const ProductInfo = styled.div`
  ${tw`p-4`}
`

const Price = styled.h6`
  ${tw`my-4 text-4xl font-bold font-display text-cadetblue-600`}
`

const Quantity = styled.input`
  ${tw`w-full py-2 pl-3 pr-1 border rounded-sm focus:border-chocolate-300`}
  transition: all 0.2s ease-out;
`

const Product = ({ location, match }) => {
  const [, , collection, me] = location.pathname.split('/')
  const state = SHOP_DATA.find(s => s.routeName === `collection/${collection}`)
  const { name, imageUrl, price } = state.items.find(p => p.id === +me)
  const [quant, clearQuant] = useField('number', 1)

  const handleSubmit = event => {
    event.preventDefault()
    clearQuant()
  }

  return (
    <PageContainer>
      <StyledPage>
        <Splash />
        <Title>{name}</Title>
        <Cols number='2' gap='4' stack='md'>
          <StyledImg
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -10 }}>
            <img src={imageUrl} alt={name} />
          </StyledImg>
          <Col>
            <ProductInfo>
              <MdHeading>{name}</MdHeading>
              <StyledP>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                aspernatur totam repudiandae dolore natus eligendi doloribus
                officiis quas dignissimos earum.
              </StyledP>
              <Price>${price}</Price>
              <Form onSubmit={handleSubmit}>
                <ButtonContainer>
                  <Button text='Add to Cart' type='submit'></Button>
                  <Quantity {...quant} min='0' max='100' />
                </ButtonContainer>
              </Form>
            </ProductInfo>
          </Col>
        </Cols>
      </StyledPage>
    </PageContainer>
  )
}

export default withRouter(Product)
