import getPageTitleByPathname from "@utils/getPageTitleByPathname";

describe("[기능]util func", () => {
  describe("getPageTitleByPathname", () => {
    it("현재 라우트를 전달 받으면, 타이틀을 리턴", () => {
      const reg = new RegExp(/To Do App|Detail Page/);

      expect(getPageTitleByPathname("/")).toBe("To Do App");
      expect(getPageTitleByPathname("/any")).toBe("Detail Page");
      expect(getPageTitleByPathname("/")).toMatch(reg);

      // 비어있지 않음
      expect(getPageTitleByPathname("/")).not.toBeNull();
      // 값이 정의되어 있음
      expect(getPageTitleByPathname("/")).not.toBeUndefined();
      // false가 아님
      expect(getPageTitleByPathname("/")).not.toBeFalsy();
    });
  });
});
