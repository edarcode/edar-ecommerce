const { productsPerPage } = require("../../../consts/instancesPerPages");
const { Product, Op, Category } = require("../../../db");
const { where } = require("./utils/where");

const getProducts = async (req, res, next) => {
  const { page = 0, name, idCategory, order, min, max } = req.body;
  try {
    const { count, rows } = await Product.findAndCountAll({
      where: where({ name, min, max, Op }),
      offset: productsPerPage * page,
      limit: productsPerPage,
      attributes: ["id", "name", "price", "discount"],
      include: idCategory && [
        {
          model: Category,
          as: "categories",
          where: { id: idCategory },
          attributes: [],
          through: { attributes: [] },
        },
      ],
      order: order && order,
    });
    const data = {
      page: parseInt(page),
      productsPerPage,
      pageCount: Math.ceil(count / productsPerPage),
      productsCount: count,
      products: rows,
    };
    res.json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = getProducts;
