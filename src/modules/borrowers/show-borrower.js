const { NotFoundError } = require("../../shared/errors");
const Borrower = require("./Borrower");

const showBorrower = async ({ id }) => {
  const existing = await Borrower.findOne({
    _id: id,
  }).select("-is_deleted");

  if (!existing) {
    throw new NotFoundError("Borrower Not Found.");
  }

  return existing;
};

module.exports = showBorrower;
