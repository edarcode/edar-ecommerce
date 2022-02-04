const { Image } = require("../../../db");

const updateImage = async (req, res, next) => {
  try {
    const { id } = req.query;
    const image = await Image.findByPk(id);
    if (!image) {
      res.json({ msg: "Not found" });
    } else {
      await image.update(req.body);
      await image.save();
      res.json({ msg: "Updated successfully" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = updateImage;
