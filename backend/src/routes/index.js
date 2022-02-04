const { Router } = require("express");
const categories = require("./categories/categories.router");
const images = require("./images/images.router");
const products = require("./products/products.router");
const suppliers = require("./suppliers/suppliers.router");
const router = Router();

router.use("/products", products);
router.use("/categories", categories);
router.use("/suppliers", suppliers);
router.use("/images", images);

module.exports = router;
