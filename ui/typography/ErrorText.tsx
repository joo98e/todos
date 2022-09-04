import styled from '@emotion/styled'

const StyledError = styled.p`
  font-size: 16px;
  color: #9c3434;
`

const ErrorText = ({ children }: any) => {
  return <StyledError>{children}</StyledError>
}

export default ErrorText
