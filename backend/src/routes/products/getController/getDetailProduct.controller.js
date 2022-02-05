const { Product, Image } = require("../../../db");

const getDetailProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({
      where: { id },
      attributes: ["id", "name", "description", "price", "stock", "discount"],
      include: [
        {
          model: Image,
          as: "images",
          through: { attributes: [] },
        },
      ],
    });
    if (!product) {
      res.json({ msg: "Not found" });
    } else {
      res.json(product);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = getDetailProduct;
