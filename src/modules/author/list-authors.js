const Author = require("./Author");

const listAuthors = async ({
  q,
  page = { limit: 5, offset: 1 },
  sort = {},
  filters,
}) => {
  let filter = {};
  const sorting = {};

  if (q) filter.name = { $regex: new RegExp(q, "i") };
  if (filters) filter = filters;
  if (sort) sort.name = sort.order;

  const result = await Author.find(filter)
    .sort(sorting)
    .skip((page.offset - 1) * page.limit)
    .limit(page.limit)
    .select("-is_deleted");

  return { list: result, pageInfo: { ...page, total: result.length } };
};

module.exports = listAuthors;
