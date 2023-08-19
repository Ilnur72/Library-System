const Book = require("./Book");

const listBooks = async ({
  q,
  page = { limit: 5, offset: 1 },
  sort,
  filters,
}) => {
  let filter = {};
  const sorting = {};

  if (q) filter.title = { $regex: new RegExp(q, "i") };
  if (filters) filter = filters;
  if (sort) sorting.copies = sort.order;

  const result = await Book.find(filter)
    .sort(sorting)
    .skip((page.offset - 1) * page.limit)
    .limit(page.limit)
    .select("-is_deleted");

  return { list: result, pageInfo: { ...page, total: result.length } };
};

module.exports = listBooks;
