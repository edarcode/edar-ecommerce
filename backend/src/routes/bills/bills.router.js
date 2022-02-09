const { Router } = require("express");
const createBill = require("./postController/createBill.controller");
const bills = Router();

bills.route("/").post(createBill);

module.exports = bills;
