import styled from "@emotion/styled";

import { CSSProperties } from "react";
import { ITextProps } from "./types";
import { Color } from "@ui/button/types";
import { css } from "@emotion/react";

interface ITyphographyProps {
  fontSize?: number;
  oneLine?: boolean;
  color?: Color;
  variant?: "plain" | "sub" | "error";
  style?: CSSProperties;
  children: string;
}

interface IComponentProps {
  fontSize?: number;
  oneLine?: boolean;
  concept?: string;
  children: string;
  style: CSSProperties;
}

const StyledTyphography = styled.p<IComponentProps>`
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.concept};

  ${(props) =>
    props.oneLine &&
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `};
`;

const concept = {
  plain: "#212f3c",
  sub: "#777777",
  error: "#c65959",
};

const Typhography = ({ fontSize = 16, children, oneLine = false, color, variant = "plain", style }: ITyphographyProps) => {
  return (
    <StyledTyphography oneLine={oneLine} fontSize={fontSize} concept={concept[variant]} style={style}>
      {children}
    </StyledTyphography>
  );
};

export default Typhography;
