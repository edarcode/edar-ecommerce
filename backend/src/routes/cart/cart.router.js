const { Router } = require("express");
const getCart = require("./getController/getProductsCart.controller");
const cart = Router();

cart.route("/").get(getCart);

module.exports = cart;
