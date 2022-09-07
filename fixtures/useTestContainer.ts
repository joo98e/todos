import { render } from "@testing-library/react";

function useTestContainer(component: any) {
  const { container } = render(component);
  return container;
}
export default useTestContainer;
