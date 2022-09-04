import styled from '@emotion/styled'

const StyledSub = styled.p`
  font-size: 16px;
  color: #777;
`

const SubText = ({ children }: any) => {
  return <StyledSub>{children}</StyledSub>
}

export default SubText
