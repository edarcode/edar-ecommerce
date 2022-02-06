const { User } = require("../../../db");
const { comparePassword } = require("../../../utils/comparePassword");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

const signIn = async (req, res, next) => {
  try {
    res.json({ msg: "signin" });
  } catch (error) {
    next(error);
  }
};

module.exports = signIn;
