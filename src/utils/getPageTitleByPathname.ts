const getPageTitleByPathname = (pathname: string) => {
  return pathname === "/"
    ? // Home
      "To Do App"
    : // DetailPage
      "Detail Page";
};

export default getPageTitleByPathname;
