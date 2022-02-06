const { User } = require("../../../db");
const { comparePassword } = require("../../../utils/comparePassword");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

const signUp = async (req, res, next) => {
  try {
    res.json({ msg: "signup" });
  } catch (error) {
    next(error);
  }
};

module.exports = signUp;
