const { compare } = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UnauthorizedError } = require("../../shared/errors");
const config = require("../../shared/config");
const Admin = require("./Admin");

const loginAdmin = async ({ username, password }) => {
  const existing = await Admin.findOne({ username , is_deleted: false});

  if (!existing) {
    throw new UnauthorizedError("Incorrect username or password.");
  }

  const match = await compare(password, existing.password);

  if (!match) {
    throw new UnauthorizedError("Incorrect username or password.");
  }

  const token = jwt.sign(
    { admin: { id: existing._id, is_super: existing.is_super } },
    config.jwt.secret,
    { expiresIn: "1d" }
  );

  return token;
};

module.exports = loginAdmin;
