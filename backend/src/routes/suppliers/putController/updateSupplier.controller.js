const { Supplier } = require("../../../db");

const updateSupplier = async (req, res, next) => {
  try {
    const { id } = req.query;
    const supplier = await Supplier.findByPk(id);
    if (!supplier) {
      res.json({ msg: "Not found" });
    } else {
      await supplier.update(req.body);
      await supplier.save();
      res.json({ msg: "Updated successfully" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = updateSupplier;
