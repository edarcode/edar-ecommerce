const { Category } = require("../../../db");

const updateCategory = async (req, res, next) => {
  try {
    const { id } = req.query;
    const category = await Category.findByPk(id);
    if (!category) {
      res.json({ msg: "Not found" });
    } else {
      await category.update(req.body);
      await category.save();
      res.json({ msg: "Updated successfully" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = updateCategory;
