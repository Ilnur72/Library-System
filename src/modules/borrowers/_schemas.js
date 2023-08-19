const Joi = require("joi");

exports.postAddBorrowerSchema = {
  body: Joi.object({
    full_name: Joi.string().required(),
    address: Joi.string().required(),
    phone: Joi.string().required(),
    is_deleted: Joi.boolean(),
  }),
};

exports.getBorrowersSchema = {
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
      by: Joi.string().valid("full_name", "phone"),
      order: Joi.string().valid("asc", "desc"),
    }),
    filters: Joi.object({
      is_deleted: Joi.boolean(),
    }),
  }),
};

exports.showBorrowerSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};

exports.patchBorrowerSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
  body: Joi.object({
    full_name: Joi.string(),
    address: Joi.string(),
    phone: Joi.string(),
  }),
};

exports.deleteBorrowerSchmea = {
  params: Joi.object({
    id: Joi.string(),
  }),
};
