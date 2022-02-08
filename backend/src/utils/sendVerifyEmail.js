const { SECRET } = process.env;
const jwt = require("jsonwebtoken");
const transporter = require("../config/nodemailer");

module.exports = {
  sendVerifyEmail: async ({ user, expiresIn }) => {
    const token = jwt.sign({ id: user.id }, SECRET, { expiresIn });
    await transporter.sendMail({
      from: '"verify email 👻" <testedarcode@gmail.com>', // sender address
      to: user.email, // list of receivers
      subject: "verify email ✔", // Subject line
      text: `http://localhost:3001/users/verify/email?token=${token}`, // plain text body
      //html: "<b>Hello world?</b>", // html body
    });
  },
};
