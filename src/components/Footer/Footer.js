import tw, { styled } from 'twin.macro'
import Cols from '../../containers/Cols'
import Col from '../../containers/Col'
import PageContainer from '../../containers/PageContainer'
import Logo from '../Logo/Logo'
import StyledP from '../Text/StyledP'
import SmHeading from '../Text/SmHeading'
import StyledList from '../Text/StyledList'

const StyledFooter = styled.footer`
  ${tw`flex items-end justify-center flex-grow w-full mt-2`}
`

const Link = styled.a`
  ${tw`cursor-pointer hover:text-cadetblue-500`}
  transition: all 0.2s ease-out;
`

const Footer = () => (
  <StyledFooter>
    <PageContainer>
      <Cols number='3' gap='4' stack='sm'>
        <Col>
          <Logo />
          <StyledP>The best apparel for the lowest price.</StyledP>
        </Col>
        <Col>
          <SmHeading>Contact</SmHeading>
          <StyledP>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            eum maxime modi, excepturi eligendi laborum?
          </StyledP>
        </Col>
        <Col align='end'>
          <StyledList
            align='end'
            items={[
              <Link href='tel:+18005400392'>1(800)-540-0392</Link>,
              <Link href='mailto:contact@victoryapparel.com'>
                contact@victoryapparel.com
              </Link>,
              <Link href='www.instagram.com/victoryapparel'>
                @victoryapparel
              </Link>,
            ]}
          />
        </Col>
      </Cols>
    </PageContainer>
  </StyledFooter>
)

export default Footer
