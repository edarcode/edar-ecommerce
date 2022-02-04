const { Router } = require("express");
const createSupplier = require("./postController/createSupplier.controller");
const suppliers = Router();

suppliers.route("/").post(createSupplier);

module.exports = suppliers;
