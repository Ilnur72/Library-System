const { NotFoundError } = require("../../shared/errors");
const Book = require("./Book");

const showBook = async ({ id }) => {
  const existing = await Book.findOne({
    _id: id
  })

  if(!existing.publisher && !existing.author) throw new NotFoundError("Not Found")

  existing.populate('publisher', "_id name address phone").populate('author', "_id name").select("-is_deleted");

  if (!existing) {
    throw new NotFoundError("Book Not Found.");
  }

  return existing;
};

module.exports = showBook;
