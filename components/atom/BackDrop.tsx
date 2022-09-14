import styled from "@emotion/styled";

interface IBackDropProps {
  onClick: React.MouseEventHandler;
}

const StyledBackDrop = styled.div<IBackDropProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

const BackDrop = ({ onClick }: IBackDropProps) => {
  return <StyledBackDrop onClick={onClick} />;
};

export default BackDrop;
