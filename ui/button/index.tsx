import styled from "@emotion/styled";
import { MouseEventHandler } from "react";
import { Color, IButtonProps } from "@ui/button/types";

const StyledButton = styled.button<{
  primary?: Color;
  textPrimary?: Color;
}>`
  width: 80px;
  height: 35px;
  font-size: 16px;
  margin: 8px;
  color: ${(props) => props.textPrimary ?? "#fff"};
  background: ${(props) => props.primary ?? "#f68484"};
  border-radius: 8px;
  cursor: pointer;
`;

const Button = ({
  primary,
  children,
  onClick,
  textPrimary,
  ...rest
}: IButtonProps) => {
  return (
    <StyledButton primary={primary} textPrimary={textPrimary} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
