const Book = require("./Book");

const addBook = async (data, id) => {
  const result = await Book.create({ ...data, admin: id});

  const { is_deleted, ...rest } = result.toObject();

  return rest;
};

module.exports = addBook;
