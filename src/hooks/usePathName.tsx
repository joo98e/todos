/**
 * @author Ayaan
 * @description pathname에 따라
 */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const usePathName = () => {
  const { pathname } = useRouter();
  const [current, setCurrent] = useState("main");

  const getPageName = (pathname: string) => {
    return pathname === "/"
      ? // Home
        "To Do App"
      : // DetailPage
        "Detail Page";
  };

  useEffect(() => {
    setCurrent(() => getPageName(pathname));
  }, [pathname]);

  return {
    current,
    pathname,
  };
};

export default usePathName;
