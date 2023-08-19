const { NotFoundError } = require("../../shared/errors");
const Author = require("./Author");

const removeAuthor = async ({ id }) => {
  const existing = await Author.findOne({ _id: id, is_deleted: false });

  if (!existing) throw new NotFoundError("Author Not Found.");

  return Author.findByIdAndUpdate(
    id,
    {
      is_deleted: true,
      name: `${existing.name}_${Date.now()}_deleted`,
    },
    { new: true }
  ).select("-is_deleted");
};

module.exports = removeAuthor;
