const { Router } = require("express");
const deleteSupplier = require("./deleteController/deleteSupplier.controller");
const getSuppliers = require("./getController/getSuppliers.controller");
const createSupplier = require("./postController/createSupplier.controller");
const updateSupplier = require("./putController/updateSupplier.controller");
const suppliers = Router();

suppliers.route("/").post(createSupplier);
suppliers.route("/").get(getSuppliers);
suppliers.route("/").put(updateSupplier);
suppliers.route("/").delete(deleteSupplier);

module.exports = suppliers;
