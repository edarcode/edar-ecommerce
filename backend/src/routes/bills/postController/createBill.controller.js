const { Bill, Product } = require("../../../db");
const { sendBill } = require("../../../utils/sendBill");

const createBill = async (req, res, next) => {
  const user = req.user;
  try {
    const { address, details, tell } = req.body;
    if (!user.tell) {
      user.tell = tell;
      user.save();
    }
    if (!user.address) {
      user.address = address;
      user.save();
    }
    const bill = await Bill.create({ address, tell });
    await bill.setUser(user.id);
    for (let i = 0; i < details.length; i++) {
      const item = details[i];
      const { id, amount } = item;
      const product = await Product.findByPk(id);
      const price = product.price;
      await bill.addProduct(id, { through: { amount, price } });
    }
    await sendBill({
      user,
      idBill: bill.id,
      details,
      createdAt: bill.createdAt,
    });
    res.json({ msg: "Pago realizado, la factura fue enviada a su correo" });
  } catch (error) {
    next(error);
  }
};

module.exports = createBill;
