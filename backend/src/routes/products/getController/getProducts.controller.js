const getProducts = async (req, res, next) => {
  try {
    res.json({ msg: "Hola edar" });
  } catch (error) {
    next(error);
  }
};

module.exports = getProducts;
