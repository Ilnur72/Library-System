const express = require("express");
const isLoggedIn = require("../../shared/auth/is-loggedin");
const hasRole = require("../../shared/auth/has-role");
const {
  postAddPublisher,
  getPublishers,
  getShowPublisher,
  patchPublisher,
  deletePublisher,
} = require("./_controllers");

const router = express.Router();

router.post(
  "/publishers",
  isLoggedIn,
  postAddPublisher
);
router.get(
  "/publishers",
  isLoggedIn,
  getPublishers
);
router.get(
  "/publishers/:id",
  isLoggedIn,
  getShowPublisher
);
router.patch(
  "/publishers/:id",
  isLoggedIn,
  patchPublisher
);
router.delete(
  "/publishers/:id",
  isLoggedIn,
  deletePublisher
);

module.exports = router;
