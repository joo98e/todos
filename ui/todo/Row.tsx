import styled from '@emotion/styled'
import { IToDoDetail } from '@store/slices/types'
import { useState } from 'react'

const StyledRow = styled.li`
  display: flex;
  align-items: baseline;
  width: 100%;
  max-height: 40px;
`

const StyledCell = styled.div<{ width?: number }>`
  min-width: 20px;
  width: ${(props) => props.width}px;
`

const StyledTitle = styled.p<{ isCompleted: boolean }>`
  display: block;
  font-size: 18px;
  color: #333;
  text-decoration: ${(props) => props.isCompleted && 'line-through'};
`

const StyledDescription = styled.p`
  display: block;
  font-size: 14px;
  color: #777;
`

const Row = ({ id, title, desc, isCompleted }: IToDoDetail) => {
  const [selected, setSelected] = useState([])

  return (
    <StyledRow>
      <StyledCell>
        {!isCompleted ? (
          <input type={'checkbox'} />
        ) : (
          <input
            type={'checkbox'}
            checked={isCompleted}
            disabled={isCompleted}
          />
        )}
      </StyledCell>

      <StyledCell width={120}>
        <StyledTitle isCompleted={isCompleted}>{title}</StyledTitle>
      </StyledCell>

      <StyledCell width={100}>
        <StyledDescription>{desc}</StyledDescription>
      </StyledCell>
    </StyledRow>
  )
}

export default Row
