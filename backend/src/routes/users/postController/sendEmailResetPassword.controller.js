const { User } = require("../../../db");
const transporter = require("../../../config/nodemailer");
const jwt = require("jsonwebtoken");
const { URL_FRONT, SECRET } = process.env;

const sendEmailResetPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({
      where: { email: (email && email) || "" },
    });
    if (user) {
      const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: 300000 });
      await transporter.sendMail({
        from: '"👻 Reset password 👻" <testedarcode@gmail.com>', // sender address
        to: user.email, // list of receivers
        subject: "✔ Reset password ✔", // Subject line
        text: `${URL_FRONT}/reset/password/${token}`,
      });
    }
    res.json({
      msg: (user && "Email enviado correctamente") || "Cuenta no encontrada",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = sendEmailResetPassword;
