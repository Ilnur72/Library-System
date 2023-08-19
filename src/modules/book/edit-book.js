const { NotFoundError } = require("../../shared/errors");
const Book = require("./Book");

const editBook = async ({ id, ...changes }) => {
  const existing = await Book.findOne({ _id: id, is_deleted: false });
  
  if (!existing) {
    throw new NotFoundError("Book Not Found.");
  }

  return Book.findByIdAndUpdate(id, changes, { new: true }).select(
    "-is_deleted"
  );
};

module.exports = editBook;
