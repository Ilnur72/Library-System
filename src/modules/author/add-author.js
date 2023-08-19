const Author = require("./Author");

const addAuthor = async (data) => {
  const result = await Author.create({ ...data });

  const { is_deleted, ...rest } = result.toObject();

  return rest;
};

module.exports = addAuthor;
