const { Category, Image } = require("../../../db");

module.exports = {
  include: ({ idCategory }) => {
    if (idCategory) {
      return [
        {
          model: Category,
          as: "categories",
          where: { id: idCategory },
          attributes: [],
          through: { attributes: [] },
        },
        {
          model: Image,
          as: "images",
          through: { attributes: [] },
        },
      ];
    } else {
      return [
        {
          model: Image,
          as: "images",
          through: { attributes: [] },
        },
      ];
    }
  },
};
