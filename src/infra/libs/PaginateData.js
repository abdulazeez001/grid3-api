/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
export default function paginateData(data, limit, page = 2) {
  const totalResult = data.length;
  limit = Number(limit);
  page = Number(page);
  let newData = JSON.parse(JSON.stringify(data));
  let next = null;
  let prev = null;
  newData = newData.slice((page - 1) * limit, page * limit);
  const retrievedResult = newData.length;
  const diff = data.length - page * limit;
  diff > 0 ? (next = page + 1) : (next = null);
  page > 1 ? (prev = page - 1) : (prev = null);

  return {
    totalResult,
    retrievedResult,
    prev,
    page,
    next,
    data: newData,
  };
}
