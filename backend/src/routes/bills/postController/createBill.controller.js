const { Bill, Product } = require("../../../db");

const createBill = async (req, res, next) => {
  const user = req.user;
  try {
    const { address, details } = req.body;
    const bill = await Bill.create({ address });
    await bill.setUser(user.id);
    for (let i = 0; i < details.length; i++) {
      const item = details[i];
      const { id, amount } = item;
      const product = await Product.findByPk(id);
      const price = product.price;
      await bill.addProduct(id, { through: { amount, price } });
    }
    res.json({ msg: "Pago realizado, la factura fue enviada a su correo" });
  } catch (error) {
    next(error);
  }
};

module.exports = createBill;
