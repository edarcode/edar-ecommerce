const { Product, Image, Supplier, Category } = require("../../../db");

const getDetailProductAdmin = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({
      where: { id },
      include: [
        {
          model: Category,
          as: "categories",
          through: { attributes: [] },
        },
        {
          model: Supplier,
          as: "suppliers",
          attributes: ["id", "name", "phone", "email"],
          through: { attributes: [] },
        },
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

module.exports = getDetailProductAdmin;
