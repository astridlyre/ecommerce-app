import tw, { styled } from 'twin.macro'

const Wrapper = styled.div`
  ${tw`flex flex-col items-center w-full max-w-screen-xl px-4 py-4 sm:px-8 lg:px-12 xl:px-16`}
`

const PageContainer = ({ children }) => <Wrapper>{children}</Wrapper>

export default PageContainer
