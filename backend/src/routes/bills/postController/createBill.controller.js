const { Bill, Product } = require("../../../db");

const createBill = async (req, res, next) => {
  const user = req.user;
  const payment = req.payment;
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
    console.log(payment);
    res.json({ msg: "Created successfully", billId: bill.id });
  } catch (error) {
    next(error);
  }
};

module.exports = createBill;
