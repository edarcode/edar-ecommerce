const nodemailer = require("nodemailer");
const { USER_NODEMAILER, PASS_NODEMAILER } = process.env;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: USER_NODEMAILER, // generated ethereal user
    pass: PASS_NODEMAILER, // generated ethereal password
  },
});

transporter.verify().then(() => {
  console.log("Ready for send emails");
});

module.exports = transporter;
