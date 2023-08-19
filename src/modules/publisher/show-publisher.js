const { NotFoundError } = require("../../shared/errors");
const Publisher = require("./Publisher");

const showPublisher = async ({ id }) => {
  const existing = await Publisher.findOne({
    _id: id,
  }).select("-is_deleted");

  if (!existing) {
    throw new NotFoundError("Publisher Not Found.");
  }

  return existing;
};

module.exports = showPublisher;
