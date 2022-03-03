const { Product, Image } = require("../../../db");

const getCart = async (req, res, next) => {
  try {
    const { cart } = req.query;
    if (!cart) return res.json({ msg: "Not found" });
    const objCart = JSON.parse(cart);
    const cartProducts = [];
    for (const key in objCart) {
      const amount = objCart[key];
      if (
        typeof amount === "number" &&
        !isNaN(amount) &&
        typeof parseInt(key) === "number" &&
        !isNaN(key)
      ) {
        const product = await Product.findOne({
          where: { id: key, state: true },
          attributes: ["id", "name", "price", "stock", "discount"],
          include: [
            {
              model: Image,
              as: "images",
              through: { attributes: [] },
            },
          ],
        });
        const { id, name, price, stock, discount } = product;
        product &&
          cartProducts.push({
            id,
            name,
            price,
            stock,
            discount,
            amount,
            total: product["price"] * amount,
          });
      }
    }
    res.json(cartProducts);
  } catch (error) {
    next(error);
  }
};

module.exports = getCart;
