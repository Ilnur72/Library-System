const express = require("express");
const isLoggedIn = require("../../shared/auth/is-loggedin");
const hasRole = require("../../shared/auth/has-role");
const {
  postAddLoan,
  getLoans,
  getShowLoan,
} = require("./_controllers");

const router = express.Router();

router.post(
  "/loans",
  isLoggedIn,
  postAddLoan
);
router.get("/loans", isLoggedIn, hasRole(["superAdmin", "admin"]), getLoans);
router.get(
  "/loans/:id",
  isLoggedIn,
  getShowLoan
);

module.exports = router;
