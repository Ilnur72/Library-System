const express = require("express");
const httpValidator = require("../../shared/validator");
const {
  postAddBookSchema,
  showBookSchema,
  patchBookSchema,
  deleteBookSchmea,
  getBooksSchema,
} = require("./_schemas");

const addBook = require("./add-book");
const listBooks = require("./list-book");
const showBook = require("./show-book");
const editBook = require("./edit-book");
const removeBook = require("./remove-book");
const { ForbiddenError } = require("../../shared/errors");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postAddBook = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postAddBookSchema);

    const result = await addBook(req.body, user.id);

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
const getBooks = async (req, res, next) => {
  try {
    httpValidator({ query: req.query }, getBooksSchema);

    const result = await listBooks(req.query);

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
const getShowBook = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showBookSchema);

    const result = await showBook({ id: req.params.id });

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
const patchBook = async (req, res, next) => {
  try {
    httpValidator({ params: req.params, body: req.body }, patchBookSchema);

    const result = await editBook({ id: req.params.id, ...req.body });

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
const deleteBook = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteBookSchmea);

    const result = await removeBook({ id: req.params.id });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postAddBook,
  getBooks,
  getShowBook,
  patchBook,
  deleteBook,
};
