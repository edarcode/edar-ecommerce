const { Router } = require("express");
const { tokenValidate } = require("../../middlewares/tokenValidate");
const { stripeValidate } = require("../../middlewares/stripeValidate");
const createBill = require("./postController/createBill.controller");
const bills = Router();

bills.route("/").post([tokenValidate, stripeValidate], createBill);

module.exports = bills;
