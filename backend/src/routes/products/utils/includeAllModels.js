const { Category, Image, Supplier } = require("../../../db");

module.exports = {
  includeAllModels: ({ idCategory }) => {
    return [
      {
        model: Category,
        as: "categories",
        where: idCategory && { id: idCategory },
        through: { attributes: [] },
      },
      {
        model: Image,
        as: "images",
        through: { attributes: [] },
      },
      {
        model: Supplier,
        as: "suppliers",
        attributes: ["id", "name", "phone", "email"],
        through: { attributes: [] },
      },
    ];
  },
};
