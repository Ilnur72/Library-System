const express = require("express");
const httpValidator = require("../../shared/validator");
const {
  postAddLoanSchema,
  showLoanSchema,
  patchLoanSchema,
  deleteLoanSchmea,
  getLoansSchema,
} = require("./_schemas");

const addLoan = require("./add-loan");
const listLoans = require("./list-loans");
const showLoan = require("./show-loan");
const { ForbiddenError } = require("../../shared/errors");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postAddLoan = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postAddLoanSchema);

    const result = await addLoan(req.body);

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
const getLoans = async (req, res, next) => {
  try {
    httpValidator({ query: req.query }, getLoansSchema);

    const result = await listLoans(req.query);

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
const getShowLoan = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showLoanSchema);

    const result = await showLoan({ id: req.params.id });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postAddLoan,
  getLoans,
  getShowLoan,
};
