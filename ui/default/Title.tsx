import getPageTitleByPathname from '@utils/getPageTitleByPathname'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { PrevSvgIcon } from '@ui/svg'

const StyledTitle = styled.h1`
  position: relative;
  display: block;
  font-size: 36px;
  text-align: center;
`

const IconButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  transition: background 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`

const Title = () => {
  const router = useRouter()
  const status = /detail/.test(router.pathname)

  return (
    <StyledTitle>
      {status && (
        <IconButton onClick={() => router.back()}>
          <PrevSvgIcon />
        </IconButton>
      )}
      {getPageTitleByPathname(router.pathname)}
    </StyledTitle>
  )
}

export default Title
