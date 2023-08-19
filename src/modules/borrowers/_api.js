const express = require("express");
const isLoggedIn = require("../../shared/auth/is-loggedin");
const hasRole = require("../../shared/auth/has-role");
const {
  postAddBorrower,
  getBorrowers,
  getShowBorrower,
  patchBorrower,
  deleteBorrower,
} = require("./_controllers");

const router = express.Router();

router.post(
  "/borrowers",
  isLoggedIn,
  postAddBorrower
);
router.get(
  "/borrowers",
  isLoggedIn,
  getBorrowers
);
router.get(
  "/borrowers/:id",
  isLoggedIn,
  getShowBorrower
);
router.patch(
  "/borrowers/:id",
  isLoggedIn,
  patchBorrower
);
router.delete(
  "/borrowers/:id",
  isLoggedIn,
  deleteBorrower
);

module.exports = router;
