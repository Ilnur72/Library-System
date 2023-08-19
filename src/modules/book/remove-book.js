const { NotFoundError } = require("../../shared/errors");
const Book = require("./Book");

const removeBook = async ({ id }) => {
  const existing = await Book.findOne({ _id: id, is_deleted: false });
  
  if (!existing) throw new NotFoundError("Book Not Found.");

  return Book.findByIdAndUpdate(
    id,
    {
      is_deleted: true,
      title: `${existing.title}_${Date.now()}_deleted`,
    },
    { new: true }
  ).select("-is_deleted");
};

module.exports = removeBook;
