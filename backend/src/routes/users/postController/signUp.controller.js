const { User } = require("../../../db");
const { encryptPassword } = require("../../../utils/encryptPassword");
const jwt = require("jsonwebtoken");
const transporter = require("../../../config/nodemailer");
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
      const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: "300000" });
      const email = await transporter.sendMail({
        from: '"verify email 👻" <testedarcode@gmail.com>', // sender address
        to: user.email, // list of receivers
        subject: "verify email ✔", // Subject line
        text: `http://localhost:3001/users/verify/email?token=${token}`, // plain text body
        //html: "<b>Hello world?</b>", // html body
      });
      res.json({
        msg: "Created successfully, Please verify your email by clicking the link sent to your email",
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = signUp;
