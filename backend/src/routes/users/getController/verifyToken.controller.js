const verifyToken = async (req, res, next) => {
  try {
    const email = req.user.email;
    res.json({ msg: "Authorized", email });
  } catch (error) {
    next(error);
  }
};

module.exports = verifyToken;
