import getPageTitleByPathname from "@utils/getPageTitleByPathname";

describe("getPageTitleByPathname", () => {
  it("getPageTitleByPathname", () => {
    const reg = new RegExp(/ToDos|Detail Page/);

    expect(getPageTitleByPathname("/")).toBe("ToDos");
    expect(getPageTitleByPathname("/")).toMatch(reg);

    // 비어있지 않음
    expect(getPageTitleByPathname("/")).not.toBeNull();
    // 값이 정의되어 있음
    expect(getPageTitleByPathname("/")).not.toBeUndefined();
    // false가 아님
    expect(getPageTitleByPathname("/")).not.toBeFalsy();
  });
});
