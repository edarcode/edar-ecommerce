const { User } = require("../../../db");
const { comparePassword } = require("../../../utils/comparePassword");
const jwt = require("jsonwebtoken");
const { sendVerifyEmail } = require("../../../utils/sendVerifyEmail");
const { SECRET } = process.env;

const signIn = async (req, res, next) => {
  try {
    const { password, email } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) return res.json({ msg: "Not found" });
    const isLogin = await comparePassword(password, user.password);
    if (!isLogin) {
      res.json({ msg: "Not found" });
    } else {
      if (!user.verifyEmail) {
        await sendVerifyEmail({ user, expiresIn: "150000" });
        return res.json({
          msg: "Please verify your email by clicking the link sent to your email",
        });
      }
      const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: "24h" });
      res.json({ token, email });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = signIn;
