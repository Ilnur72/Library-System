const express = require("express");
const httpValidator = require("../../shared/validator");
const {
  postAddBorrowerSchema,
  showBorrowerSchema,
  patchBorrowerSchema,
  deleteBorrowerSchmea,
  getBorrowersSchema,
} = require("./_schemas");

const addBorrower = require("./add-borrower");
const listBorrowers = require("./list-borrower");
const showBorrower = require("./show-borrower");
const editBorrower = require("./edit-borrower");
const removeBorrower = require("./remove-borrower");
const { ForbiddenError } = require("../../shared/errors");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postAddBorrower = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postAddBorrowerSchema);

    const result = await addBorrower(req.body);

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
const getBorrowers = async (req, res, next) => {
  try {
    httpValidator({ query: req.query }, getBorrowersSchema);

    const result = await listBorrowers(req.query);

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
const getShowBorrower = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showBorrowerSchema);

    const result = await showBorrower({ id: req.params.id });

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
const patchBorrower = async (req, res, next) => {
  try {
    httpValidator({ params: req.params, body: req.body }, patchBorrowerSchema);

    const result = await editBorrower({ id: req.params.id, ...req.body });

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
const deleteBorrower = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteBorrowerSchmea);

    const result = await removeBorrower({ id: req.params.id });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postAddBorrower,
  getBorrowers,
  getShowBorrower,
  patchBorrower,
  deleteBorrower,
};
