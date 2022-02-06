const { User } = require("../../../db");
const { encryptPassword } = require("../../../utils/encryptPassword");

const signUp = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { password: await encryptPassword(password) },
    });
    if (!created) {
      res.json({ msg: "Already exists" });
    } else {
      res.json({ msg: "Created successfully" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = signUp;
