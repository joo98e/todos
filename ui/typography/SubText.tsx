import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Color } from "@ui/button";
import { CSSProperties } from "react";

const StyledSubText = styled.p<{
  fontSize?: number;
  oneLine?: boolean;
  color?: Color;
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
}: {
  fontSize?: number;
  oneLine?: boolean;
  color?: Color;
  style?: CSSProperties;
  children: JSX.Element | string;
}) => {
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
