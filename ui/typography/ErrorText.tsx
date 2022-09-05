import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Color } from "@ui/button";
import { CSSProperties } from "react";

const StyledErrorText = styled.p<{
  fontSize?: number;
  oneLine?: boolean;
}>`
  font-size: ${(props) => props.fontSize}px;
  color: #9c3434;

  ${(props) =>
    props.oneLine &&
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
  oneLine = false,
  style,
  ...rest
}: {
  fontSize?: number;
  oneLine?: boolean;
  color?: Color;
  style?: CSSProperties;
  children: JSX.Element | string;
}) => {
  return (
    <StyledErrorText
      oneLine={oneLine}
      fontSize={fontSize}
      color={color}
      style={style}
      {...rest}
    >
      {children}
    </StyledErrorText>
  );
};

export default ErrorText;
