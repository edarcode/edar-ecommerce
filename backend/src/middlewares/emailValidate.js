module.exports = {
  emailValidate: (req, res, next) => {
    const { user } = req;
    if (!user.verifyEmail) return res.json({ msg: "Require email valid" });
    next();
  },
};
