const { Router } = require("express");
const categories = require("./categories/putController/categories.router");
const products = require("./products/products.router");
const router = Router();

router.use("/products", products);
router.use("/categories", categories);

module.exports = router;
