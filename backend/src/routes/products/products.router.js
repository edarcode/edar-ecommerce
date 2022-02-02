const { Router } = require("express");
const getProducts = require("./getController/getProducts.controller");
const products = Router();

products.route("/").get(getProducts);

module.exports = products;
