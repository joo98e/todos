/**
 * @legacy Code
 */
import styled from "@emotion/styled";
import { MouseEventHandler } from "react";
import { css } from "@emotion/css";

const Wrapper = styled.div<{
  visible: boolean;
}>`
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.5s;
`;

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
`;

const Alert = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 400px;
  min-height: 200px;
  background: #fdfdfd;
  border-radius: 24px;
  box-sizing: border-box;
  padding: 12px;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
  z-index: 9;
  transform: translate(-50%, -50%);
`;

const Dialog = ({
  children,
  isVisible,
  onExit,
}: {
  children: JSX.Element | JSX.Element[] | string;
  isVisible: boolean;
  onExit: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <Wrapper visible={isVisible}>
      <BackDrop />
      <Alert>{children}</Alert>
    </Wrapper>
  );
};

export default Dialog;
