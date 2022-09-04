import Title from './Title'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  width: 720px;
  margin: 0 auto;
  padding-top: 24px;
`

const Children = styled.div`
  width: 720px;
  margin: 0 auto;
  padding-top: 24px;
`

const Layout = ({ children }: any) => {
  return (
    <Wrapper>
      {/* Title */}
      <Title />
      {/* Children */}
      <Children>{children}</Children>
    </Wrapper>
  )
}

export default Layout
