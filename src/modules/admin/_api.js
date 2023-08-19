const express = require("express");
const isLoggedIn = require("../../shared/auth/is-loggedin");
const hasRole = require("../../shared/auth/has-role");
const {
  postLoginAdmin,
  postAddAdmin,
  getAdmins,
  getShowAdmin,
  patchAdmin,
  patchAdminMe,
  deleteAdmin,
} = require("./_controllers");

const router = express.Router();

router.post("/login", postLoginAdmin);
router.post("/admins", isLoggedIn, hasRole(["superAdmin"]), postAddAdmin);
router.get("/admins", isLoggedIn, getAdmins);
router.get(
  "/admins/:id",
  isLoggedIn,
  hasRole(["superAdmin", "admin"]),
  getShowAdmin
);
router.patch("/admins/me", isLoggedIn, hasRole(["admin"]), patchAdminMe);
router.patch("/admins/:id", isLoggedIn, hasRole(["superAdmin"]), patchAdmin);
router.delete("/admins/:id", isLoggedIn, hasRole(["superAdmin"]), deleteAdmin);

module.exports = router;
