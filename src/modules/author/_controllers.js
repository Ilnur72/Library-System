const express = require("express");
const httpValidator = require("../../shared/validator");
const {
  postAddAuthorSchema,
  showAuthorSchema,
  patchAuthorSchema,
  deleteAuthorSchmea,
  getAuthorsSchema,
} = require("./_schemas");

const addAuthor = require("./add-author");
const listAuthors = require("./list-authors");
const showAuthor = require("./show-author");
const editAuthor = require("./edit-author");
const removeAuthor = require("./remove-author");
const { ForbiddenError } = require("../../shared/errors");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postAddAuthor = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postAddAuthorSchema);

    const result = await addAuthor(req.body);

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
const getAuthors = async (req, res, next) => {
  try {
    httpValidator({ query: req.query }, getAuthorsSchema);

    const result = await listAuthors(req.query);

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
const getShowAuthor = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showAuthorSchema);

    const result = await showAuthor({ id: req.params.id });

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
const patchAuthor = async (req, res, next) => {
  try {
    httpValidator({ params: req.params, body: req.body }, patchAuthorSchema);

    const result = await editAuthor({ id: req.params.id, ...req.body });

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
const deleteAuthor = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteAuthorSchmea);

    const result = await removeAuthor({ id: req.params.id });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postAddAuthor,
  getAuthors,
  getShowAuthor,
  patchAuthor,
  deleteAuthor,
};
