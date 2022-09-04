import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Color } from "@ui/button";

const StyledErrorText = styled.p<{
  fontSize?: number;
  oneline?: boolean;
}>`
  font-size: ${(props) => props.fontSize}px;
  color: #9c3434;

  ${(props) =>
    props.oneline &&
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `};
`;

const ErrorText = ({
  fontSize = 12,
  children,
  color,
  oneline = false,
  ...rest
}: {
  fontSize?: number;
  oneline?: boolean;
  color?: Color;
  children: JSX.Element | string;
}) => {
  return (
    <StyledErrorText
      oneline={oneline}
      fontSize={fontSize}
      color={color}
      {...rest}
    >
      {children}
    </StyledErrorText>
  );
};

export default ErrorText;
