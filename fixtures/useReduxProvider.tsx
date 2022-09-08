import { configureStore, PreloadedState } from "@reduxjs/toolkit";
import { render, RenderOptions } from "@testing-library/react";
import toDoSlice from "@store/slices/toDoSlice";
import store, { RootState } from "@store/index";
import toDoState from "@store/slices/toDoSlice";
import { JSXElementConstructor, PropsWithChildren } from "react";
import { Provider } from "react-redux";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  mockStore?: typeof store;
}

const useReduxProvider = (
  ui: React.ReactElement<any, string | JSXElementConstructor<any>>,
  {
    preloadedState = {
      toDoState: {
        toDos: [],
      },
    },
    mockStore = configureStore({
      reducer: { toDoState },
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions
) => {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={mockStore}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export default useReduxProvider;
