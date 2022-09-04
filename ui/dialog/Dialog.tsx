/**
 * @legacy
 */

import { IDialogProps } from '@ui/dialog/types'
import styled from '@emotion/styled'

const DialogBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
`

const DialogWrapper = styled.div`
  width: 480px;
  height: 480px;
  background: #fff;
`

const DialogHeader = styled.div`
  font-size: 32px;
`

const DialogContent = styled.div``

const Dialog = ({
  isOpen = false,
  subject,
  content,
}: IDialogProps) => {
  return (
    <DialogBackground>
      {!isOpen && (
        <DialogWrapper>
          <DialogHeader>{subject}</DialogHeader>
          <DialogContent>{content}</DialogContent>
        </DialogWrapper>
      )}
    </DialogBackground>
  )
}

export default Dialog
