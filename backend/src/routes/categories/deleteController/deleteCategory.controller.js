const { Category } = require("../../../db");

const deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.query;
    const result = await Category.destroy({ where: { id } }); //return 0 o 1
    res.json(result ? { msg: "Destroy successfully" } : { msg: "Not found" });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteCategory;
