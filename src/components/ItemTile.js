import { withRouter } from 'react-router-dom'
import { motion } from 'framer-motion'
import tw, { styled } from 'twin.macro'

const BgImg = styled.div`
  ${tw`absolute inset-0 rounded-sm`}
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  transition: opacity 1s ease-out;
  z-index: -5;
`

const StyledTitle = styled.h2`
  ${tw`text-sm font-medium uppercase text-cadetblue-900 font-display`}
`

const SubTitle = styled.p`
  ${tw`text-sm uppercase text-cadetblue-900 font-display`}
`

const StyledTitleContainer = styled.div`
  ${tw`flex items-center justify-between w-full p-4 rounded-b-sm`}
  background-color: rgba(243, 247, 245, 0.9);
  transition: all 0.4s ease-out;
`

const StyledDiv = styled(motion.div)`
  ${tw`relative z-0 flex items-end justify-center w-full overflow-hidden rounded-sm opacity-0 cursor-pointer`}
  height: 35vh;
  @media (max-width: 639px) {
    height: 25vh;
  }

  &:after {
    ${tw`absolute inset-0 rounded-sm opacity-25 bg-cadetblue-400 content`}
    z-index: 10;
  }

  &:hover ${BgImg} {
    opacity: 0.7;
    transition: opacity 1s ease-out;
  }

  &:hover ${StyledTitleContainer} {
    background-color: rgba(243, 247, 245, 1);
    transition: all 0.4s ease-out;
  }
`

const ItemTile = ({ variants, name, imageUrl, id, price, history, match }) => (
  <StyledDiv
    onClick={() => history.push(`${match.url}/${id}`)}
    variants={variants}>
    <BgImg src={imageUrl} />
    <StyledTitleContainer>
      <StyledTitle>{name}</StyledTitle>
      <SubTitle>${price}</SubTitle>
    </StyledTitleContainer>
  </StyledDiv>
)

export default withRouter(ItemTile)
