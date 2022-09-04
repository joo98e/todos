import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Color } from "@ui/button";

const StyledPlainText = styled.p<{
  fontSize?: number;
  oneline?: boolean;
  color?: Color;
}>`
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.color ?? "#212f3c"};
  ${(props) =>
    props.oneline &&
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `};
`;

const PlainText = ({
  fontSize = 16,
  children,
  oneline = false,
  color,
  ...rest
}: {
  fontSize?: number;
  oneline?: boolean;
  color?: Color;
  children: JSX.Element | string;
}) => {
  return (
    <StyledPlainText
      oneline={oneline}
      fontSize={fontSize}
      color={color}
      {...rest}
    >
      {children}
    </StyledPlainText>
  );
};

export default PlainText;
