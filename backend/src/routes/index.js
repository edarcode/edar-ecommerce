const { Router } = require("express");
const products = require("./products/products.router");
const router = Router();

router.use("/products", products);

module.exports = router;
