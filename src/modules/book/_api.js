const express = require("express");
const isLoggedIn = require("../../shared/auth/is-loggedin");
const hasRole = require("../../shared/auth/has-role");
const {
  postAddBook,
  getBooks,
  getShowBook,
  patchBook,
  deleteBook,
} = require("./_controllers");

const router = express.Router();

router.post(
  "/books",
  isLoggedIn,
  postAddBook
);
router.get("/books", isLoggedIn, getBooks);
router.get(
  "/books/:id",
  isLoggedIn,
  getShowBook
);
router.patch(
  "/books/:id",
  isLoggedIn,
  patchBook
);
router.delete(
  "/books/:id",
  isLoggedIn,
  deleteBook
);

module.exports = router;
