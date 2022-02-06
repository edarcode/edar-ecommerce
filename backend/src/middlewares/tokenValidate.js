const jwt = require("jsonwebtoken");
const { SECRET } = process.env;
const { User } = require("../db");

module.exports = {
  tokenValidate: async (req, res, next) => {
    try {
      const { token } = req.body;
      if (!token) return res.json({ msg: "No token provided" });
      const { id } = jwt.verify(token, SECRET); //lanza err si no el valido
      const user = await User.findByPk(id);
      if (!user) return json({ msg: "No user found" });
      req.user = user;
      next();
    } catch (error) {
      res.json({ msg: "Unauthorized" });
    }
  },
};
