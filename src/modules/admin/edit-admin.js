const { NotFoundError } = require("../../shared/errors");
const Admin = require("./Admin");

const editAdmin = async ({ id, ...changes }) => {
  const existing = await Admin.findOne({ _id: id, is_deleted: false });

  if (!existing) {
    throw new NotFoundError("Admin Not Found.");
  }

  return Admin.findByIdAndUpdate(id, changes, { new: true });
};

module.exports = editAdmin;
