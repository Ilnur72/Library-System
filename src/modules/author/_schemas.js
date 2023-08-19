const Joi = require("joi");

exports.postAddAuthorSchema = {
  body: Joi.object({
    name: Joi.string().required(),
    is_deleted: Joi.boolean(),
  }),
};

exports.getAuthorsSchema = {
  query: Joi.object({
    q: Joi.string(),
    page: Joi.object({
      offset: Joi.number().integer(),
      limit: Joi.number().integer().when("offset", {
        is: Joi.exist(),
        then: Joi.required(),
        otherwise: Joi.forbidden(),
      }),
    }),
    sort: Joi.object({
      by: Joi.string().valid("name"),
      order: Joi.string().valid("asc", "desc"),
    }),
    filters: Joi.object({
      is_deleted: Joi.boolean(),
    }),
  }),
};

exports.showAuthorSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};

exports.patchAuthorSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
  body: Joi.object({
    name: Joi.string(),
  }),
};

exports.deleteAuthorSchmea = {
  params: Joi.object({
    id: Joi.string(),
  }),
};
