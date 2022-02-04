const { Supplier } = require("../../../db");
const { suppliersPerPage } = require("../../../consts/pages");

const getSuppliers = async (req, res, next) => {
  try {
    const { page = 0 } = req.query;
    const { count, rows } = await Supplier.findAndCountAll({
      offset: suppliersPerPage * page,
      limit: suppliersPerPage,
    });
    const data = {
      page,
      suppliersPerPage,
      pageCount: Math.ceil(count / suppliersPerPage),
      suppliersCount: count,
      suppliers: rows,
    };
    res.json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = getSuppliers;
