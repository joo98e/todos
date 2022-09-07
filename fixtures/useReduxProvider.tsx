import { configureStore, PreloadedState } from "@reduxjs/toolkit";
import { render, RenderOptions } from "@testing-library/react";
import toDoSlice from "@store/slices/toDoSlice";
import store, { RootState } from "@store/index";
import toDoState from "@store/slices/toDoSlice";
import { JSXElementConstructor, PropsWithChildren } from "react";
import { Provider } from "react-redux";

interface IUseReduxProvider {
  ui:
    | React.ReactElement<any, any>
    | React.ReactElement<any, string | JSXElementConstructor<any>>
    | Element;
}

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  newStore?: typeof store;
}

const useReduxProvider = (
  ui: IUseReduxProvider,
  {
    preloadedState = {
      toDoState: {
        toDos: [],
      },
    },
    newStore = configureStore({
      reducer: { toDoState },
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions
) => {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={newStore}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export default useReduxProvider;
