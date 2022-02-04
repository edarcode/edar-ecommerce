const { Image } = require("../../../db");

const getImages = async (req, res, next) => {
  try {
    const images = await Image.findAll();
    res.json(images);
  } catch (error) {
    next(error);
  }
};

module.exports = getImages;
