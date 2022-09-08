import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { CSSProperties } from "react";
import { ITextProps } from "@ui/typography/types";
import {Color} from "@ui/button/types";

const StyledSubText = styled.p<{
  fontSize?: number;
  oneLine?: boolean;
  color?: Color
}>`
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.color ?? "#777777"};

  ${(props) =>
    props.oneLine &&
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `};
`;

const SubText = ({
  fontSize = 12,
  children,
  color,
  style,
  oneLine = false,
  ...rest
}: ITextProps) => {
  return (
    <StyledSubText
      oneLine={oneLine}
      fontSize={fontSize}
      color={color}
      style={style}
      {...rest}
    >
      {children}
    </StyledSubText>
  );
};

export default SubText;
