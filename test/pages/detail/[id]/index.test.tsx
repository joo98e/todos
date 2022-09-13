import { beforeEach } from "@jest/globals";
import useReduxProvider from "@testing/fixtures/useReduxProvider";
import DetailToDoPage from "@pages/detail/[id]";

describe("[pages]", () => {
  describe('route : "detail/[id]"', () => {
    let container;

    beforeEach(() => {
      container = useReduxProvider(<DetailToDoPage />, {});
    });
    it("rendered", () => {});
  });
});
