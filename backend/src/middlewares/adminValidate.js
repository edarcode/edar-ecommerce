module.exports = {
  adminValidate: (req, res, next) => {
    const { user } = req;
    if (user.role !== "client") return res.json({ msg: "Require admin rol" });
    next();
  },
};
