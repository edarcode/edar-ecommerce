const { Router } = require("express");
const verifyEmail = require("./getController/verifyEmail.controller");
const signIn = require("./postController/signIn.controller");
const signUp = require("./postController/signUp.controller");
const users = Router();

users.route("/signup").post(signUp);
users.route("/signin").post(signIn);
users.route("/verify/email").get(verifyEmail);

module.exports = users;
