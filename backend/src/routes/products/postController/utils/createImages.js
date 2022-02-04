const { Image } = require("../../../../db");
module.exports = {
  createImages: async (urls) => {
    const instanceImages = [];
    for (let i = 0; i < urls.length; i++) {
      const url = urls[i];
      const [image, created] = await Image.findOrCreate({ where: { url } });
      if (created) instanceImages.push(image.id);
    }
    return instanceImages;
  },
};
