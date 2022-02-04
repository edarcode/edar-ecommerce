const { Router } = require("express");
const getProducts = require("./getController/getProducts.controller");
const createProduct = require("./postController/createProduct.controller");
const products = Router();

products.route("/").post(createProduct);
products.route("/").get(getProducts);

module.exports = products;
