const { Image } = require("../../../db");

const createImage = async (req, res, next) => {
  try {
    const { url } = req.body;
    const [image, created] = await Image.findOrCreate({
      where: { url },
    });
    if (!created) {
      res.json({ msg: "Already exists", image });
    } else {
      res.json({ msg: "Created successfully", image });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = createImage;
