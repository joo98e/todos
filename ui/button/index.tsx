import styled from "@emotion/styled";
import { MouseEventHandler } from "react";

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;

const StyledButton = styled.button<{
  primary?: Color;
  textPrimary?: Color;
}>`
  width: 80px;
  height: 35px;
  font-size: 16px;
  margin: 8px;
  color: ${(props) => props.textPrimary ?? "#fff"};
  background: ${(props) => props.primary ?? "#ff5c5c"};
  border-radius: 8px;
`;

const Button = ({
  primary,
  children,
  onClick,
  textPrimary,
  ...rest
}: {
  primary?: Color;
  textPrimary?: Color;
  children: JSX.Element | string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <StyledButton primary={primary} textPrimary={textPrimary} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
