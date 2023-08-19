const { NotFoundError } = require("../../shared/errors");
const Admin = require("./Admin");

const removeAdmin = async ({ id }) => {
  const existing = await Admin.findOne({ _id: id, is_deleted: false });

  if (!existing) throw new NotFoundError("Admin Not Found.");

  return Admin.findByIdAndUpdate(
    id,
    {
      is_deleted: true,
      username: `${existing.username}_${Date.now()}_deleted`,
    },
    { new: true }
  ).select("-password -is_deleted");
};

module.exports = removeAdmin;
