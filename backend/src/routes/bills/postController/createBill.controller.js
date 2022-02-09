const { Bill, Product } = require("../../../db");

const createBill = async (req, res, next) => {
  try {
    const { userId, address, details } = req.body;
    const bill = await Bill.create({ address });
    await bill.setUser(userId);
    for (let i = 0; i < details.length; i++) {
      const item = details[i];
      const { productId, amount } = item;
      const product = await Product.findByPk(productId);
      const price = product.price;
      await bill.addProduct(productId, { through: { amount, price } });
    }
    res.json({ msg: "Created successfully", billId: bill.id });
  } catch (error) {
    next(error);
  }
};

module.exports = createBill;
