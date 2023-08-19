const { hash } = require("bcryptjs");
const Admin = require("./Admin");

const addAdmin = async (data) => {
  const hashedPassword = await hash(data.password, 10);
  const result = await Admin.create({
    ...data,
    is_super: false,
    password: hashedPassword,
  });

  const { is_deleted, ...rest } = result.toObject();

  return rest;
};

module.exports = addAdmin;
