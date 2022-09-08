import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { CSSProperties } from "react";
import { ITextProps } from "@ui/typography/types";
import { Color } from "@ui/button/types";

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
}: ITextProps) => {
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
