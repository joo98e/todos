import { Color } from "@ui/button";
import { CSSProperties } from "react";

export interface ITextProps {
  fontSize?: number;
  oneLine?: boolean;
  color?: Color;
  style?: CSSProperties;
  children: JSX.Element | string;
}
