const { Router } = require("express");
const signUp = require("./getController/signUp.controller");
const signIn = require("./postController/signIn.controller");
const users = Router();

users.route("/signin").post(signIn);
users.route("/signup").post(signUp);

module.exports = users;
