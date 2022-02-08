const { productsPerPageAdmin } = require("../../../consts/instancesPerPages");
const { Product, Category, Op } = require("../../../db");
const { where } = require("../utils/where");

const getProductsAdmin = async (req, res, next) => {
  const { page = 0, name, idCategory, order, min, max, state } = req.query;
  try {
    const { count, rows } = await Product.findAndCountAll({
      where: where({ name, min, max, Op, state }),
      offset: productsPerPageAdmin * page,
      limit: productsPerPageAdmin,
      attributes: ["id", "name", "price", "stock", "discount"],
      include: idCategory && [
        {
          model: Category,
          as: "categories",
          attributes: [],
          throught: { attributes: [] },
        },
      ],
      order: order && order,
      distinct: true,
    });
    const data = {
      page: parseInt(page),
      productsPerPage: productsPerPageAdmin,
      pageCount: Math.ceil(count / productsPerPageAdmin),
      productsCount: count,
      products: rows,
    };
    res.json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = getProductsAdmin;
