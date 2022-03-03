const { Product, Image } = require("../../../db");

const getCart = async (req, res, next) => {
  try {
    const { cart } = req.query;
    if (!cart) return res.json({ msg: "Not found" });
    const objCart = JSON.parse(cart);
    const cartProducts = [];
    for (const key in objCart) {
      const value = objCart[key];
      if (
        typeof value === "number" &&
        !isNaN(value) &&
        typeof parseInt(key) === "number" &&
        !isNaN(key)
      ) {
        const product = await Product.findOne({
          where: { id: key, state: true },
          attributes: [
            "id",
            "name",
            "description",
            "price",
            "stock",
            "discount",
          ],
          include: [
            {
              model: Image,
              as: "images",
              through: { attributes: [] },
            },
          ],
        });
        product && cartProducts.push(product);
      }
    }
    res.json(cartProducts);
  } catch (error) {
    next(error);
  }
};

module.exports = getCart;
