const Publisher = require("./Publisher");

const addPublisher = async (data) => {
  const result = await Publisher.create({ ...data });

  const { is_deleted, ...rest } = result.toObject();

  return rest;
};

module.exports = addPublisher;
