import tw, { styled } from 'twin.macro'
import PageContainer from '../containers/PageContainer'
import PageTile from '../components/PageTile'
import SHOP_DATA from '../state'
import Cols from '../containers/Cols'

const StyledMain = styled.main`
  ${tw`w-full pt-24`}
`

const Home = () => {
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

  const sm = SHOP_DATA.slice(0, 3)
  const md = SHOP_DATA.slice(3, 5)

  return (
    <PageContainer>
      <StyledMain>
        <Cols
          number='3'
          gap='4'
          stack='sm'
          animate='fadeIn'
          initial='fadeOut'
          variants={c}>
          {sm?.map(({ id, ...props }) => (
            <PageTile key={id} variants={mi} size='md' {...props} />
          ))}
        </Cols>
        <Cols
          number='2'
          gap='4'
          stack='sm'
          animate='fadeIn'
          initial='fadeOut'
          variants={c}>
          {md?.map(({ id, ...props }) => (
            <PageTile key={id} variants={mi} size='lg' {...props} />
          ))}
        </Cols>
      </StyledMain>
    </PageContainer>
  )
}

export default Home
