const { Router } = require("express");
const getCategory = require("./getController/getCategories.controller");
const createCategory = require("./postController/createCategory.controller");
const categories = Router();

categories.route("/").post(createCategory);
categories.route("/").get(getCategory);

module.exports = categories;
