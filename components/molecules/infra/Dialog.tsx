import styled from "@emotion/styled";
import BackDrop from "@components/atom/BackDrop";

interface IDialogProps {
  isVisible: boolean;
  onClose: React.MouseEventHandler;
  children: JSX.Element | JSX.Element[] | string;
}

interface IViewWrapper {
  isVisible: boolean;
}

const ViewWrapper = styled.div<IViewWrapper>`
  display: ${(props) => (props.isVisible ? "block" : "none")};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.2s;
`;

const View = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
`;

const Dialog = ({ isVisible, children, onClose }: IDialogProps) => {
  return (
    <ViewWrapper isVisible={isVisible}>
      <BackDrop onClick={onClose} />
      <View>{children}</View>
    </ViewWrapper>
  );
};

export default Dialog;
