const { Supplier } = require("../../../db");

const deleteSupplier = async (req, res, next) => {
  try {
    const { id } = req.query;
    const isDestroy = await Supplier.destroy({ where: { id } }); //return 0 o 1
    res.json(
      isDestroy ? { msg: "Destroy successfully" } : { msg: "Not found" }
    );
  } catch (error) {
    next(error);
  }
};

module.exports = deleteSupplier;
