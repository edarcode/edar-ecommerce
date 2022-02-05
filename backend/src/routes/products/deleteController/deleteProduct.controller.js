const { Product } = require("../../../db");

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.query;
    const isDestroy = await Product.destroy({ where: { id } }); //return 0 o 1
    res.json(
      isDestroy ? { msg: "Destroy successfully" } : { msg: "Not found" }
    );
  } catch (error) {
    next(error);
  }
};

module.exports = deleteProduct;
