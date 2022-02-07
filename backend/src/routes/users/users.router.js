const { Router } = require("express");
const signIn = require("./postController/signIn.controller");
const signUp = require("./postController/signUp.controller");
const users = Router();

users.route("/signup").post(signUp);
users.route("/signin").post(signIn);

module.exports = users;
