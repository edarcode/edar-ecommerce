const { Product } = require("../../../db");
const { includeAllModels } = require("../utils/includeAllModels");

const getDetailProductAdmin = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({
      where: { id },
      include: includeAllModels({}),
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
