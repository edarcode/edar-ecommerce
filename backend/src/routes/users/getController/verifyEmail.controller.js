const { User } = require("../../../db");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

const verifyEmail = async (req, res, next) => {
  try {
    const { token } = req.query;
    if (!token) return res.json({ msg: "No token provided" });
    const { id } = jwt.verify(token, SECRET); //lanza err si no es valido
    const user = await User.findByPk(id);
    if (!user) return res.json({ msg: "Unauthorized" });
    await user.update({ verifyEmail: true });
    await user.save();
    res.sendFile(__dirname + "/welcome.html");
  } catch (error) {
    res.json({ msg: "Unauthorized" });
  }
};

module.exports = verifyEmail;
