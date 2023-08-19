const Borrower = require("./Borrower");

const addBorrower = async (data) => {
  const result = await Borrower.create({ ...data });

  const { is_deleted, ...rest } = result.toObject();

  return rest;
};

module.exports = addBorrower;
