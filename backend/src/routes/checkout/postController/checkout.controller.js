const getCheckout = async (req, res, next) => {
  try {
    res.json("checkout");
  } catch (error) {
    next(error);
  }
};

module.exports = getCheckout;
