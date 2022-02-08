const { SECRET } = process.env;
const jwt = require("jsonwebtoken");
const transporter = require("../config/nodemailer");
const { baseURL } = process.env;

module.exports = {
  sendVerifyEmail: async ({ user, expiresIn }) => {
    const token = jwt.sign({ id: user.id }, SECRET, { expiresIn });
    await transporter.sendMail({
      from: '"👻 Verify email 👻" <testedarcode@gmail.com>', // sender address
      to: user.email, // list of receivers
      subject: "✔ Verify email ✔", // Subject line
      text: `${baseURL}/users/verify/email?token=${token}`, // plain text body
      //html: "<b>Hello world?</b>", // html body
    });
  },
};
