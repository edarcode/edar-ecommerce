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
          msg: "Ya posee una cuenta con nosotros, porfavor verifique su email dando click en el link enviado a su correo",
        });
      } else {
        res.json({ msg: "Esta cuenta ya existe" });
      }
    } else {
      await sendVerifyEmail({ user, expiresIn: "300000" });
      res.json({
        msg: "Cuenta creada correctamente, porfavor verifique su email dando click en el link enviado a su correo",
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = signUp;
