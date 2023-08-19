const { NotFoundError } = require("../../shared/errors");
const Author = require("./Author");

const showAuthor = async ({ id }) => {
  const existing = await Author.findOne({ _id: id }).select(
    "-is_deleted"
  );

  if (!existing) {
    throw new NotFoundError("Author Not Found.");
  }

  return existing;
};

module.exports = showAuthor;
