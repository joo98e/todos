import styled from "@emotion/styled";

import { CSSProperties } from "react";
import { css } from "@emotion/react";

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type Color = RGB | RGBA | HEX;

interface ITyphographyProps {
  fontSize?: number;
  oneLine?: boolean;
  color?: Color;
  variant?: "plain" | "sub" | "error";
  style?: CSSProperties;
  children: string;
  italy?: boolean;
}

interface IComponentProps {
  fontSize?: number;
  oneLine?: boolean;
  concept?: string;
  children: string;
  style?: CSSProperties;
  italy?: boolean;
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

  ${(props) =>
    props.italy &&
    css`
      font-family: "LeferiPoint-WhiteObliqueA", sans-serif;
    `}
`;

const concept = {
  plain: "#212f3c",
  sub: "#777777",
  error: "#c65959",
};

const Typhography = ({ fontSize = 16, children, oneLine = false, color, variant = "plain", style, italy }: ITyphographyProps) => {
  return (
    <StyledTyphography oneLine={oneLine} fontSize={fontSize} concept={concept[variant]} style={style} italy={italy}>
      {children}
    </StyledTyphography>
  );
};

export default Typhography;
