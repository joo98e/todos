import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Color } from "@ui/button";
import { CSSProperties } from "react";

const StyledPlainText = styled.p<{
  fontSize?: number;
  oneLine?: boolean;
  color?: Color;
}>`
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.color ?? "#212f3c"};

  ${(props) =>
    props.oneLine &&
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `};
`;

const PlainText = ({
  fontSize = 16,
  children,
  oneLine = false,
  color,
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
    <StyledPlainText
      oneLine={oneLine}
      fontSize={fontSize}
      color={color}
      style={style}
      {...rest}
    >
      {children}
    </StyledPlainText>
  );
};

export default PlainText;
