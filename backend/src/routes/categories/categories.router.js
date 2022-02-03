const { Router } = require("express");
const deleteCategory = require("./deleteController/deleteCategory.controller");
const getCategory = require("./getController/getCategories.controller");
const createCategory = require("./postController/createCategory.controller");
const updateCategory = require("./putController/updateCategory");
const categories = Router();

categories.route("/").post(createCategory);
categories.route("/").get(getCategory);
categories.route("/").delete(deleteCategory);
categories.route("/").put(updateCategory);

module.exports = categories;
