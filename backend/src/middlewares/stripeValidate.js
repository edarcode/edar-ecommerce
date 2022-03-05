const Stripe = require("stripe");

const stripe = new Stripe(
  "sk_test_51KZTycDEat7IUYBbexkqyVFomY52YtMhLuuXzxTaI50GZ8JQ6VRLQSXntlGtvANqpwIcNzBVijgA1lze0ioXW82m005FWoD6G6"
);

module.exports = {
  stripeValidate: async (req, res, next) => {
    try {
      const { paymentMethod } = req.body;
      const payment = await stripe.paymentIntents.create({
        amount: 1,
        currency: "USD",
        description: "",
        payment_method: paymentMethod.id,
        confirm: true,
      });
      req.payment = payment;
      next();
    } catch (error) {
      res.json({ msg: "Unauthorized" });
    }
  },
};
