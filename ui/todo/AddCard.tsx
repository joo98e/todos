import { PlusSvgIcon } from '@ui/svg'
import { StyledCard } from '@ui/todo/Card'
import { useState } from 'react'
import styled from '@emotion/styled'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addToDoList } from '@store/slices/todoSlice'

const StyledBackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
`

const StyledGenerateBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  min-height: 200px;
  background: #fdfdfd;
  border-radius: 24px;
  box-sizing: border-box;
  padding: 12px;
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
  z-index: 9;
  transform: translate(-50%, -50%);
`

const StyledSubject = styled.h4`
  font-size: 20px;
  color: mediumslateblue;
`

const StyledContent = styled.div``

const StyledInput = styled.input`
  display: block;
  width: 100%;
  font-size: 16px;
  color: slategrey;
  padding: 4px;
  border-bottom: 1px solid #333;
`

const StyledTextArea = styled.textarea`
  display: block;
  width: 100%;
  font-size: 16px;
  color: slategrey;
  padding: 4px;
  border-bottom: 1px solid #333;
  resize: none;
`

const StyledParagraph = styled.p`
  text-align: center;
  padding: 4px;
`

const StyledButton = styled.button<{
  primary: string
}>`
  width: 80px;
  height: 35px;
  font-size: 16px;
  margin: 8px;
  background: ${(props) => props.primary};
`

const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

interface IForm {
  id: number | Date
  nickname: string
  subject: string
  desc: string
}

const AddCard = () => {
  const [visible, setVisible] = useState(false)
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IForm>()

  const onSubmit = (data: IForm) => {
    dispatch(
      addToDoList({
        ...data,
        id: new Date().getTime(),
      })
    )
    handleToggle()
  }

  const handleToggle = () => {
    setVisible((prev) => !prev)
    reset()
  }

  return (
    <>
      <StyledCard isIconCard={true} onClick={handleToggle}>
        <PlusSvgIcon />
      </StyledCard>

      {visible && (
        <>
          <StyledBackDrop onClick={handleToggle} />
          <StyledGenerateBox>
            <form onSubmit={handleSubmit(onSubmit)}>
              <StyledSubject>to do</StyledSubject>
              <StyledContent>
                <StyledInput
                  {...register('nickname', {
                    required: '닉네임을 입력해주세요. ',
                  })}
                  placeholder={'닉네임을 입력하세요.'}
                />
                <StyledInput
                  {...register('subject', {
                    required: '제목을 입력해주세요. ',
                  })}
                  placeholder={'제목을 입력하세요.'}
                />
                <StyledTextArea
                  {...register('desc', { required: '내용을 입력해주세요. ' })}
                  placeholder={'내용을 입력하세요.'}
                  rows={4}
                />
              </StyledContent>
              <StyledParagraph>
                {errors.nickname?.message ||
                  errors.subject?.message ||
                  errors.desc?.message}
              </StyledParagraph>
              <StyledButtonGroup>
                <StyledButton
                  primary={'#D5F5E3'}
                  onClick={handleSubmit(onSubmit)}
                >
                  추가
                </StyledButton>
                <StyledButton primary={'#EBEDEF'} onClick={handleToggle}>
                  닫기
                </StyledButton>
              </StyledButtonGroup>
            </form>
          </StyledGenerateBox>
        </>
      )}
    </>
  )
}

export default AddCard
