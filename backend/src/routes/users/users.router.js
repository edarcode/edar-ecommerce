const { Router } = require("express");
const signIn = require("./getController/signIn.controller");
const signUp = require("./postController/signUp.controller");
const users = Router();

users.route("/signup").post(signUp);
users.route("/signin").get(signIn);

module.exports = users;
