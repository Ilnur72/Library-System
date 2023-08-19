const { NotFoundError } = require("../../shared/errors");
const Admin = require("./Admin");

const showAdmin = async ({ id }) => {
  const existing = await Admin.findOne({ _id: id }).select("-password");

  if (!existing) {
    throw new NotFoundError("Admin Not Found.");
  }

  return existing;
};

module.exports = showAdmin;
