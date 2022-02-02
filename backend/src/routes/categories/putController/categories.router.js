const { Router } = require("express");
const createCategory = require("../postController/createCategory.controller");
const categories = Router();

categories.route("/").post(createCategory);

module.exports = categories;
