const { encryptPassword } = require("../../../utils/encryptPassword");

const resetPassword = async (req, res, next) => {
  try {
    const { password } = req.body;
    const user = req.user;
    await user.update({ password: await encryptPassword(password) });
    await user.save();
    res.json({ msg: "Password editado correctamente" });
  } catch (error) {
    next(error);
  }
};

module.exports = resetPassword;
