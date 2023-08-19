const { NotFoundError } = require("../../shared/errors");
const Publisher = require("./Publisher");

const removePublisher = async ({ id }) => {
  const existing = await Publisher.findOne({ _id: id, is_deleted: false });

  if (!existing) throw new NotFoundError("Publisher Not Found.");

  return Publisher.findByIdAndUpdate(
    id,
    {
      is_deleted: true,
      phone: `${existing.phone}_${Date.now()}_deleted`,
    },
    { new: true }
  ).select("-is_deleted");
};

module.exports = removePublisher;
