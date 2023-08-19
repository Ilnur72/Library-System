const Borrower = require("./Borrower");

const listBorrowers = async ({
  q,
  page = { limit: 5, offset: 1 },
  sort = {},
  filters,
}) => {
  let filter = {};
  const sorting = {};

  if (q) filter.full_name = { $regex: new RegExp(q, "i") };
  if (filters) filter = filters;
  if (sort.by == "phone") sorting.phone = sort.order;
  if (sort.by == "full_name") sorting.full_name = sort.order;
  const result = await Borrower.find(filter)
    .sort(sorting)
    .skip((page.offset - 1) * page.limit)
    .limit(page.limit)
    .select("-is_deleted");

  return { list: result, pageInfo: { ...page, total: result.length } };
};

module.exports = listBorrowers;
