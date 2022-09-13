import { render } from "@testing-library/react";

function useCustomProvider(component: any) {
  const { container } = render(component);
  return container;
}
export default useCustomProvider;
