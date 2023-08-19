const { NotFoundError } = require("../../shared/errors");
const Borrower = require("./Borrower");

const removeBorrower = async ({ id }) => {
  const existing = await Borrower.findOne({ _id: id, is_deleted: false });

  if (!existing) throw new NotFoundError("Borrower Not Found.");

  return Borrower.findByIdAndUpdate(
    id,
    {
      is_deleted: true,
      phone: `${existing.phone}_${Date.now()}_deleted`,
    },
    { new: true }
  ).select("-is_deleted");
};

module.exports = removeBorrower;
