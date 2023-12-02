export default function pagination(data, page, limit) {
  const currentPage = page == 0 ? 0 : page * limit;
  const currentPageEnd = currentPage == 0 ? 5 : currentPage + limit;
  const limitedData = data.slice(currentPage, currentPageEnd);
  return limitedData;
}
