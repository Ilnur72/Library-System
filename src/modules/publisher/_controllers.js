const express = require("express");
const httpValidator = require("../../shared/validator");
const {
  postAddPublisherSchema,
  showPublisherSchema,
  patchPublisherSchema,
  deletePublisherSchmea,
  getPublishersSchema,
} = require("./_schemas");

const addPublisher = require("./add-publisher");
const listPublishers = require("./list-publishers");
const showPublisher = require("./show-publisher");
const editPublisher = require("./edit-publisher");
const removePublisher = require("./remove-publisher");
const { ForbiddenError } = require("../../shared/errors");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postAddPublisher = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postAddPublisherSchema);

    const result = await addPublisher(req.body);

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
const getPublishers = async (req, res, next) => {
  try {
    httpValidator({ query: req.query }, getPublishersSchema);

    const result = await listPublishers(req.query);

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
const getShowPublisher = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showPublisherSchema);

    const result = await showPublisher({ id: req.params.id });

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
const patchPublisher = async (req, res, next) => {
  try {
    httpValidator({ params: req.params, body: req.body }, patchPublisherSchema);

    const result = await editPublisher({ id: req.params.id, ...req.body });

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
const deletePublisher = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deletePublisherSchmea);

    const result = await removePublisher({ id: req.params.id });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postAddPublisher,
  getPublishers,
  getShowPublisher,
  patchPublisher,
  deletePublisher,
};
