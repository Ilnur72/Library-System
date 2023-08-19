const { NotFoundError } = require("../../shared/errors");
const Loan = require("./Loan");

const showLoan = async ({ id }) => {
  const existing = await Loan.findOne({
    _id: id,
  })
    .populate({
      path: "book",
      select: "-_id publisher author",
      populate: [
        {
          path: "publisher",
          select: "-_id name",
        },
        {
          path: "author",
          select: "-_id name",
        },
      ],
    })
    .populate("admin", "-_id username")
    .populate("borrower", "-_id full_name");

  if (!existing) {
    throw new NotFoundError("Loan Not Found.");
  }

  return existing;
};

module.exports = showLoan;
