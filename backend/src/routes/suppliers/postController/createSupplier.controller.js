const { Supplier } = require("../../../db");

const createSupplier = async (req, res, next) => {
  try {
    const { name, email, phone } = req.body;
    const [supplier, created] = await Supplier.findOrCreate({
      where: { name },
      defaults: { email, phone },
    });
    if (!created) {
      res.json({ msg: "Already exists", supplier });
    } else {
      res.json({ msg: "Created successfully", supplier });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = createSupplier;
