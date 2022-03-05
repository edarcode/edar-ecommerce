require("dotenv").config();
const Stripe = require("stripe");
const { SECRET_STRIPE } = process.env;

const stripe = new Stripe(SECRET_STRIPE);

module.exports = {
  stripeValidate: async (req, res, next) => {
    try {
      const { paymentMethod, details } = req.body;
      const totalCart = details.reduce((acc, item) => acc + item.total, 0);
      const payment = await stripe.paymentIntents.create({
        amount: totalCart * 100,
        currency: "USD",
        description: "",
        payment_method: paymentMethod.id,
        confirm: true,
      });
      next();
    } catch (error) {
      res.json({ msg: error.raw.message });
    }
  },
};
