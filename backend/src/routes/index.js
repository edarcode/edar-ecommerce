const { Router } = require("express");
const bills = require("./bills/bills.router");
const categories = require("./categories/categories.router");
const images = require("./images/images.router");
const products = require("./products/products.router");
const suppliers = require("./suppliers/suppliers.router");
const users = require("./users/users.router");
const cart = require("./cart/cart.router");
const router = Router();

router.use("/products", products);
router.use("/categories", categories);
router.use("/suppliers", suppliers);
router.use("/images", images);
router.use("/users", users);
router.use("/bills", bills);
router.use("/cart", cart);

module.exports = router;
