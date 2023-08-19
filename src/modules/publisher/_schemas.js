const Joi = require("joi");

exports.postAddPublisherSchema = {
  body: Joi.object({
    name: Joi.string().required(),
    address: Joi.string().required(),
    phone: Joi.string(),
    is_deleted: Joi.boolean(),
  }),
};

exports.getPublishersSchema = {
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

exports.showPublisherSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};

exports.patchPublisherSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
  body: Joi.object({
    name: Joi.string(),
    address: Joi.string(),
    phone: Joi.string(),
  }),
};

exports.deletePublisherSchmea = {
  params: Joi.object({
    id: Joi.string(),
  }),
};
