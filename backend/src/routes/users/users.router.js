const { Router } = require("express");
const createUser = require("./postController/createUser.controller");
const users = Router();

users.route("/").post(createUser);

module.exports = users;
