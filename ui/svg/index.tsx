import { CSSProperties } from "react";
import { ISVGProps } from "@ui/svg/types";

export const PlusSvgIcon = ({ width, height, style, ...rest }: ISVGProps) => {
  return (
    <svg
      width={width}
      height={height}
      style={style}
      {...rest}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const PrevSvgIcon = ({ width, height, style, ...rest }: ISVGProps) => {
  return (
    <svg
      width={width}
      height={height}
      style={style}
      {...rest}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};
