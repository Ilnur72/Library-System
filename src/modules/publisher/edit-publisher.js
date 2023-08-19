const { NotFoundError } = require("../../shared/errors");
const Publisher = require("./Publisher");

const editPublisher = async ({ id, ...changes }) => {
  const existing = await Publisher.findOne({ _id: id, is_deleted: false });

  if (!existing) {
    throw new NotFoundError("Publisher Not Found.");
  }

  return Publisher.findByIdAndUpdate(id, changes, { new: true }).select(
    "-is_deleted"
  );
};

module.exports = editPublisher;
