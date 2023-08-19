const express = require("express");
const isLoggedIn = require("../../shared/auth/is-loggedin");
const hasRole = require("../../shared/auth/has-role");
const {
  postAddAuthor,
  getAuthors,
  getShowAuthor,
  patchAuthor,
  deleteAuthor,
} = require("./_controllers");

const router = express.Router();

router.post("/authors", isLoggedIn, postAddAuthor);
router.get("/authors", isLoggedIn, getAuthors);
router.get("/authors/:id", isLoggedIn, getShowAuthor);
router.patch("/authors/:id", isLoggedIn, patchAuthor);
router.delete("/authors/:id", isLoggedIn, deleteAuthor);

module.exports = router;
