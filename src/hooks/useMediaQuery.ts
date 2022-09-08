import { CSSProperties } from "react";
interface IUseMediaQuery {
  minWidth?: number;
  style?: CSSProperties;
}

const useMediaQuery = ({ minWidth = 768, style }: IUseMediaQuery) => {
  return `@media(min-width: ${minWidth}px) {
        ${{ ...style }}
    }`;
};

export default useMediaQuery;
