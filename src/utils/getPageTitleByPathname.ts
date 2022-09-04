const getPageTitleByPathname = (pathname: string) => {
  return pathname === '/'
    ? // Home
      'ToDos'
    : // DetailPage
      'Detail Page'
}

export default getPageTitleByPathname
