const Loan = require("./Loan");

const listLoans = async ({
  page = { limit: 5, offset: 1 },
  sort = {},
  filters,
}) => {
  let filter = {};
  const sorting = {};

  if (filters) filter = filters;
  if (sort.by == "out_date") sorting.out_date = sort.order;
  if (sort.by == "due_date") sorting.due_date = sort.order;

  const result = await Loan.find(filter)
    .sort(sorting)
    .skip((page.offset - 1) * page.limit)
    .limit(page.limit)
  
  return { list: result, pageInfo: { ...page, total: result.length } };
};

module.exports = listLoans;
