const { Router } = require("express");
const getSuppliers = require("./getController/getSuppliers.controller");
const createSupplier = require("./postController/createSupplier.controller");
const suppliers = Router();

suppliers.route("/").post(createSupplier);
suppliers.route("/").get(getSuppliers);

module.exports = suppliers;
