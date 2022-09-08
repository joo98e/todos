import styled from '@emotion/styled'

interface IDialogProps {
  isVisible: boolean
  onClose: () => void
  children: JSX.Element | JSX.Element[] | string
}

interface IViewWrapper {
  isVisible: boolean
}

const ViewWrapper = styled.div<IViewWrapper>`
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.2s;
`

const StyledBackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`

const View = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
`

const Dialog = ({ isVisible, children, onClose }: IDialogProps) => {
  return (
    <ViewWrapper isVisible={isVisible}>
      <StyledBackDrop onClick={onClose} />
      <View>{children}</View>
    </ViewWrapper>
  )
}

export default Dialog
