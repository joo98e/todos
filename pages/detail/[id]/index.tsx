import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { RootState } from '@store/index'
import { useEffect } from 'react'
import { IToDo } from '@store/slices/types'
import styled from '@emotion/styled'
import Row from '@ui/todo/Row'
import PlainText from '@ui/typography/PlainText'

const StyledToDoDetailBox = styled.div`
  width: 480px;
  margin: 0 auto;
  padding: 36px;
`

const StyledAuthorParagraph = styled.p`
  font-size: 24px;
`

const StyledAuthorDescription = styled.p`
  font-size: 18px;
  color: #777;
`

const DetailToDoPage = () => {
  const router = useRouter()
  const toDoId = router.query.id ? +router.query.id : undefined

  // TODO 이름 변경하기
  const detailTodo: IToDo = useSelector((state: RootState) => {
    return state.todo.todo.filter((item) => item.id === toDoId)[0]
  })

  return (
    <StyledToDoDetailBox>
      {detailTodo && (
        <>
          <StyledAuthorParagraph>
            {`${detailTodo.nickname}'s To Do` ?? ' - '}
          </StyledAuthorParagraph>
          <StyledAuthorDescription>
            {detailTodo.desc ?? ' - '}
          </StyledAuthorDescription>
        </>
      )}
      <PlainText>안녕하세요.</PlainText>

      {detailTodo &&
        detailTodo.list?.length &&
        detailTodo.list.map((item) => {
          return <Row {...item} />
        })}
    </StyledToDoDetailBox>
  )
}

export default DetailToDoPage
