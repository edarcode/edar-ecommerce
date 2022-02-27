const { Router } = require("express");
const { tokenValidate } = require("../../middlewares/tokenValidate");
const verifyEmail = require("./getController/verifyEmail.controller");
const verifyToken = require("./getController/verifyToken.controller");
const sendEmailResetPassword = require("./postController/sendEmailResetPassword.controller");
const signIn = require("./postController/signIn.controller");
const signUp = require("./postController/signUp.controller");
const users = Router();

users.route("/signup").post(signUp);
users.route("/signin").post(signIn);
users.route("/verify/email").get(verifyEmail);
users.route("/verify/token").get(tokenValidate, verifyToken);
users.route("/reset/password").post(sendEmailResetPassword);

module.exports = users;
