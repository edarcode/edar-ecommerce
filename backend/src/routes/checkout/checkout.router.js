const { Router } = require("express");
const getCheckout = require("./postController/checkout.controller");
const checkout = Router();

checkout.route("/").post(getCheckout);

module.exports = checkout;
