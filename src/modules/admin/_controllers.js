const express = require("express");
const httpValidator = require("../../shared/validator");
const {
  postAddAdminSchema,
  postLoginAdminSchema,
  showAdminSchema,
  patchAdminSchema,
  patchMeSchema,
  deleteAdminSchmea,
  getAdminsSchema,
} = require("./_schemas");

const addAdmin = require("./add-admin");
const loginAdmin = require("./login-admin");
const listAdmins = require("./list-admins");
const showAdmin = require("./show-admin");
const editAdmin = require("./edit-admin");
const removeAdmin = require("./remove-admin");
const { ForbiddenError } = require("../../shared/errors");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postAddAdmin = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postAddAdminSchema);

    const result = await addAdmin(req.body);

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postLoginAdmin = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postLoginAdminSchema);
    const result = await loginAdmin(req.body);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getAdmins = async (req, res, next) => {
  try {
    httpValidator({ query: req.query }, getAdminsSchema);

    const result = await listAdmins(req.query);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getShowAdmin = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showAdminSchema);

    const result = await showAdmin({ id: req.params.id });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const patchAdminMe = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, patchMeSchema);

    const result = await editAdmin({ id: req.user.id, ...req.body });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const patchAdmin = async (req, res, next) => {
  try {
    httpValidator({ params: req.params, body: req.body }, patchAdminSchema);

    const result = await editAdmin({ id: req.params.id, ...req.body });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const deleteAdmin = async (req, res, next) => {
  try {
    if (req.user.id == req.params.id) throw new ForbiddenError("Forbidden");
    httpValidator({ params: req.params }, deleteAdminSchmea);

    const result = await removeAdmin({ id: req.params.id });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postAddAdmin,
  postLoginAdmin,
  getAdmins,
  getShowAdmin,
  patchAdmin,
  patchAdminMe,
  deleteAdmin,
};
