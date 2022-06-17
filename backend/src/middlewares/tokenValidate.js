const jwt = require("jsonwebtoken");
const { SECRET } = process.env;
const { User } = require("../db");

module.exports = {
  tokenValidate: async (req, res, next) => {
    try {
      const { token } = req.headers;
      console.log("token", token);
      if (!token) return res.json({ msg: "No token provided" });
      const { id } = jwt.verify(token, SECRET); //lanza err si no es valido
      console.log("secret", SECRET);
      const user = await User.findByPk(id);
      if (!user) return res.json({ msg: "Unauthorized" });
      req.user = user;
      next();
    } catch (error) {
      console.log("catch");
      res.json({ msg: "Unauthorized" });
    }
  },
};
