const { productsPerPage } = require("../../../consts/instancesPerPages");
const { Product, Op } = require("../../../db");
const { include } = require("../utils/include");
const { where } = require("../utils/where");

const getProducts = async (req, res, next) => {
  const { page = 0, name, idCategory, order, min, max } = req.query;
  try {
    const { count, rows } = await Product.findAndCountAll({
      where: where({ name, min, max, Op }),
      offset: productsPerPage * page,
      limit: productsPerPage,
      attributes: ["id", "name", "price", "discount"],
      include: include({ idCategory }),
      order: order && order,
      distinct: true,
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
