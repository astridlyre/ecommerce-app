import tw, { styled } from 'twin.macro'
import PageContainer from '../containers/PageContainer'
import ItemTile from '../components/ItemTile'
import Cols from '../containers/Cols'
import SHOP_DATA from '../state'
import { withRouter } from 'react-router-dom'
import Title from '../components/Text/Title'

const StyledMain = styled.main`
  ${tw`w-full pt-24`}
`

const Collection = ({ history, match }) => {
  const c = {
    fadeIn: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
    fadeOut: { opacity: 0 },
  }

  const mi = {
    fadeIn: { opacity: 1, y: 0 },
    fadeOut: { opacity: 0, y: -10 },
  }

  const DATA = SHOP_DATA.find(i => i.routeName === match.url.substring(1))

  return (
    <PageContainer>
      <StyledMain>
        <Title>{DATA.title}</Title>
        <Cols
          number='4'
          gap='4'
          stack='sm'
          animate='fadeIn'
          initial='fadeOut'
          variants={c}>
          {DATA.items.map(({ id, ...props }) => (
            <ItemTile key={id} variants={mi} size='md' id={id} {...props} />
          ))}
        </Cols>
      </StyledMain>
    </PageContainer>
  )
}

export default withRouter(Collection)
