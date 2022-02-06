const { Router } = require("express");
const { adminValidate } = require("../../middlewares/adminValidate");
const { tokenValidate } = require("../../middlewares/tokenValidate");
const deleteProduct = require("./deleteController/deleteProduct.controller");
const getDetailProduct = require("./getController/getDetailProduct.controller");
const getDetailProductAdmin = require("./getController/getDetailProductAdmin.controller");
const getProducts = require("./getController/getProducts.controller");
const createProduct = require("./postController/createProduct.controller");
const updateProduct = require("./putController/updateProduct.controller");
const products = Router();

products.route("/:id").get(getDetailProduct);
products.route("/").get(getProducts);
products.route("/").post(createProduct);
products.route("/").delete([tokenValidate, adminValidate], deleteProduct);
products.route("/").put(updateProduct);
products.route("/admin/:id").get(getDetailProductAdmin);

module.exports = products;
