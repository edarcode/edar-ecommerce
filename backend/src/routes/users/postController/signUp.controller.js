const { User } = require("../../../db");
const { encryptPassword } = require("../../../utils/encryptPassword");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

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
      const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: 86400 });
      res.json({ token });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = signUp;
