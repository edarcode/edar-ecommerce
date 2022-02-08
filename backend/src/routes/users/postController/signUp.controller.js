const { User } = require("../../../db");
const { encryptPassword } = require("../../../utils/encryptPassword");
const { sendVerifyEmail } = require("../../../utils/sendVerifyEmail");

const signUp = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { password: await encryptPassword(password) },
    });
    if (!created) {
      if (!user.verifyEmail) {
        await sendVerifyEmail({ user, expiresIn: "150000" });
        res.json({
          msg: "Already had an account, please verify your email by clicking the link sent to your email",
        });
      } else {
        res.json({ msg: "Already exists" });
      }
    } else {
      await sendVerifyEmail({ user, expiresIn: "150000" });
      res.json({
        msg: "Created successfully, please verify your email by clicking the link sent to your email",
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = signUp;
