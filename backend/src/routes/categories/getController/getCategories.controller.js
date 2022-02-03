const { Category } = require("../../../db");

const getCategory = async (req, res, next) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    next(error);
  }
};

module.exports = getCategory;
