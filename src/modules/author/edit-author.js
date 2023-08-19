const { NotFoundError } = require("../../shared/errors");
const Author = require("./Author");

const editAuthor = async ({ id, ...changes }) => {
  const existing = await Author.findOne({ _id: id, is_deleted: false });

  if (!existing) {
    throw new NotFoundError("Author Not Found.");
  }

  return Author.findByIdAndUpdate(id, changes, { new: true }).select(
    "-is_deleted"
  );
};

module.exports = editAuthor;
