import { MouseEventHandler } from "react";

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;

export interface IButtonProps {
  primary?: Color;
  textPrimary?: Color;
  children: JSX.Element | string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
