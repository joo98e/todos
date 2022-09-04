import styled from '@emotion/styled'

const StyledPlain = styled.p`
  font-size: 16px;
  color: #333;
`

const PlainText = ({ children }: any) => {
  return <StyledPlain>{children}</StyledPlain>
}

export default PlainText
