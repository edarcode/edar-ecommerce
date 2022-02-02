const { Category } = require("../../../db");

const createCategory = async (req, res, next) => {
  try {
    const { name, img } = req.body;
    const [category, created] = await Category.findOrCreate({
      where: { name },
      defaults: { img },
    });
    if (!created) {
      res.json({ msg: "Already exists", category });
    } else {
      res.json({ msg: "Created successfully", category });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = createCategory;
