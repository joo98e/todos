import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Color } from "@ui/button";

const StyledSubText = styled.p<{
  fontSize?: number;
  oneline?: boolean;
  color?: Color;
}>`
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.color ?? "#777777"};

  ${(props) =>
    props.oneline &&
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
  oneline = false,
  ...rest
}: {
  fontSize?: number;
  oneline?: boolean;
  color?: Color;
  children: JSX.Element | string;
}) => {
  return (
    <StyledSubText
      oneline={oneline}
      fontSize={fontSize}
      color={color}
      {...rest}
    >
      {children}
    </StyledSubText>
  );
};

export default SubText;
