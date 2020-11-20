import { withRouter } from 'react-router-dom'
import { motion } from 'framer-motion'
import tw, { styled } from 'twin.macro'

const BgImg = styled.div`
  ${tw`absolute inset-0`}
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  transition: all 1s ease-out;
  z-index: -1;
`

const StyledTitle = styled.h2`
  ${tw`text-2xl font-light uppercase text-cadetblue-900 font-display`}
  letter-spacing: -1px;
`

const SubTitle = styled.p`
  ${tw`uppercase text-cadetblue-500 font-display`}
  transform: translateY(-10px);
  transition: all 0.4s ease-out;
  opacity: 0;
`

const StyledTitleContainer = styled.div`
  ${tw`flex flex-col items-center justify-center p-8 rounded-sm`}
  background-color: rgba(227, 236, 231, 0.75);
  transition: all 0.4s ease-out;
`

const StyledDiv = styled(motion.div)`
  ${tw`relative z-0 flex items-center justify-center w-full overflow-hidden rounded-sm opacity-0 cursor-pointer`}
  height: ${props => {
    if (props.height === 'sm') {
      return 20
    } else if (props.height === 'md') {
      return 30
    } else if (props.height === 'lg') {
      return 40
    }
  }}vh;
  @media (max-width: 639px) {
    height: 25vh;
  }

  &:after {
    ${tw`absolute inset-0 opacity-25 bg-cadetblue-400 content`}
    z-index: 10;
  }

  &:hover ${BgImg} {
    transform: scale(1.075);
    transition: all 2s ease-out;
  }

  &:hover ${StyledTitleContainer} {
    background-color: rgba(227, 236, 231, 0.9);
    transition: all 0.4s ease-out;
  }

  &:hover ${SubTitle} {
    transform: translateY(0);
    transition: all 0.4s ease-out;
    opacity: 1;
  }
`

const ItemTile = ({
  variants,
  size,
  title,
  imageUrl,
  routeName,
  history,
  match,
}) => (
  <StyledDiv
    onClick={() => history.push(`${match.url}${routeName}`)}
    variants={variants}
    height={size}>
    <BgImg src={imageUrl} />
    <StyledTitleContainer>
      <StyledTitle>{title}</StyledTitle>
      <SubTitle>shop now</SubTitle>
    </StyledTitleContainer>
  </StyledDiv>
)

export default withRouter(ItemTile)
